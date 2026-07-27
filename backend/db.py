"""Access-log storage (Neon Postgres in production).

Everything here is best-effort. If DATABASE_URL is unset, or the database is
unreachable, the API must go on serving quizzes exactly as if logging did not
exist — statistics are never worth a failed request.
"""

import asyncio
import logging
import os

import asyncpg

log = logging.getLogger(__name__)

DATABASE_URL = os.environ.get("DATABASE_URL", "").strip()

SCHEMA = """
create table if not exists request_log (
  id          bigserial primary key,
  ts          timestamptz not null default now(),
  client_id   uuid,
  method      text     not null,
  path        text     not null,
  status      smallint not null,
  duration_ms integer,
  user_agent  text
);
create index if not exists request_log_ts_idx     on request_log (ts desc);
create index if not exists request_log_client_idx on request_log (client_id, ts desc);

create table if not exists answer_log (
  id                 bigserial primary key,
  ts                 timestamptz not null default now(),
  client_id          uuid,
  question_id        integer  not null,
  selected           smallint not null,
  correct            boolean  not null,
  anatomy_components text[]
);
create index if not exists answer_log_ts_idx       on answer_log (ts desc);
create index if not exists answer_log_question_idx on answer_log (question_id);
create index if not exists answer_log_client_idx   on answer_log (client_id, ts desc);
"""

_pool: asyncpg.Pool | None = None

# create_task only holds a weak reference, so a fire-and-forget task can be
# garbage collected mid-flight. Keep a strong reference until it finishes.
_tasks: set[asyncio.Task] = set()


def enabled() -> bool:
    return bool(DATABASE_URL)


async def connect() -> None:
    """Open the pool and ensure the tables exist."""
    global _pool
    if not enabled() or _pool is not None:
        return
    try:
        _pool = await asyncpg.create_pool(
            DATABASE_URL,
            # Neon bills compute by how long the database stays awake, not by
            # query count, so never hold an idle connection open: that would
            # block autosuspend and quietly burn the free allowance.
            min_size=0,
            max_size=2,
            # Render's free tier sleeps and Neon autosuspends, so connections go
            # stale between bursts of traffic. Recycle them rather than hand a
            # dead one to a writer.
            max_inactive_connection_lifetime=30.0,
            command_timeout=10.0,
        )
        async with _pool.acquire() as conn:
            await conn.execute(SCHEMA)
        log.info("access log: connected, schema ready")
    except Exception:
        # A bad connection string must not take the API down with it.
        log.exception("access log: could not connect, logging disabled")
        _pool = None


async def disconnect() -> None:
    global _pool
    if _pool is not None:
        await _pool.close()
        _pool = None


def _spawn(coro) -> None:
    """Run a write in the background so no response waits on the database.

    create_task needs a running event loop, which a sync FastAPI endpoint does
    not have — those run in a threadpool. Callers should be async, but this
    must never be the thing that fails a request, so a missing loop is caught
    and the write is dropped rather than raised.
    """
    if _pool is None:
        coro.close()
        return
    try:
        task = asyncio.create_task(coro)
    except RuntimeError:
        coro.close()
        log.warning("access log: no running event loop, write dropped")
        return
    _tasks.add(task)
    task.add_done_callback(_tasks.discard)


async def _write(sql: str, *args) -> None:
    try:
        async with _pool.acquire() as conn:
            await conn.execute(sql, *args)
    except Exception:
        log.exception("access log: write failed")


def record_request(
    client_id: str | None,
    method: str,
    path: str,
    status: int,
    duration_ms: int,
    user_agent: str | None,
) -> None:
    _spawn(
        _write(
            "insert into request_log (client_id, method, path, status, duration_ms, user_agent)"
            " values ($1, $2, $3, $4, $5, $6)",
            client_id,
            method,
            path,
            status,
            duration_ms,
            user_agent,
        )
    )


def record_answer(
    client_id: str | None,
    question_id: int,
    selected: int,
    correct: bool,
    anatomy_components: list[str],
) -> None:
    _spawn(
        _write(
            "insert into answer_log (client_id, question_id, selected, correct, anatomy_components)"
            " values ($1, $2, $3, $4, $5)",
            client_id,
            question_id,
            selected,
            correct,
            anatomy_components,
        )
    )

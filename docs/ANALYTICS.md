# Reading the stats

Run these in the [Neon SQL console](https://console.neon.tech) against the
database `DATABASE_URL` points at.

Two tables:

| Table | One row per | Answers |
|---|---|---|
| `request_log` | HTTP request | how many people, how often, phone vs desktop |
| `answer_log`  | question answered | which questions and body parts get failed |

`client_id` is a random UUID the browser generates and keeps in `localStorage`.
It is not a login and not personal data. Read every "people" number as an
**upper bound**: the same person on a phone and a laptop counts twice, and
clearing site data mints a new id.

---

## Which questions are hardest

```sql
select question_id,
       count(*)                                as attempts,
       count(*) filter (where not correct)     as wrong,
       round(100.0 * count(*) filter (where not correct) / count(*), 1) as pct_wrong
from answer_log
group by question_id
having count(*) >= 5          -- ignore questions with too little data to mean anything
order by pct_wrong desc, attempts desc;
```

Raise the `having` threshold as traffic grows. Without it a question answered
once, wrongly, sits at 100% above everything else.

## Which body parts are hardest

The reason `anatomy_components` is stored on each answer — it makes this a
group-by rather than something you cannot ask at all.

```sql
select component,
       count(*)                            as attempts,
       count(*) filter (where not correct) as wrong,
       round(100.0 * count(*) filter (where not correct) / count(*), 1) as pct_wrong
from answer_log, unnest(anatomy_components) as component
group by component
having count(*) >= 5
order by pct_wrong desc, attempts desc;
```

A structure appears once per question that mentions it, so a component used in
many questions accumulates attempts faster. Compare `pct_wrong`, not `wrong`.

## Your own weak spots

Find your id in the browser console on the site:
`localStorage.getItem('anatomy-quiz-client-id')`

```sql
select component,
       count(*)                            as attempts,
       count(*) filter (where not correct) as wrong
from answer_log, unnest(anatomy_components) as component
where client_id = 'PASTE-YOUR-ID-HERE'
group by component
having count(*) filter (where not correct) > 0
order by wrong desc;
```

Swap `component` for `question_id` to see individual questions instead.

## Is anyone improving

Score per round is not stored, so this approximates it by day.

```sql
select date_trunc('day', ts)::date          as day,
       count(*)                             as answers,
       round(100.0 * count(*) filter (where correct) / count(*), 1) as pct_correct
from answer_log
where client_id = 'PASTE-YOUR-ID-HERE'
group by day
order by day;
```

---

## How many people use the app

```sql
select count(distinct client_id) filter (where ts > now() - interval '1 day')   as day,
       count(distinct client_id) filter (where ts > now() - interval '7 days')  as week,
       count(distinct client_id) filter (where ts > now() - interval '30 days') as month,
       count(distinct client_id)                                                as all_time
from request_log;
```

## Daily active people

```sql
select date_trunc('day', ts)::date as day,
       count(distinct client_id)   as people,
       count(*)                    as requests
from request_log
group by day
order by day desc
limit 30;
```

## Phone or desktop

```sql
select case when user_agent ilike '%mobile%' or user_agent ilike '%android%'
              or user_agent ilike '%iphone%' then 'mobile' else 'desktop' end as device,
       count(distinct client_id) as people,
       count(*)                  as requests
from request_log
group by device;
```

## Rounds started vs finished

Each `GET /quiz` is a round started; every ten answers is roughly one finished.

```sql
select (select count(*) from request_log where path = '/quiz')      as rounds_started,
       (select count(*) from answer_log)                            as answers_given,
       round((select count(*) from answer_log)::numeric
             / nullif((select count(*) from request_log where path = '/quiz'), 0), 1)
                                                                    as answers_per_round;
```

`answers_per_round` well below 10 means people are abandoning rounds partway.

## Is anything broken or slow

```sql
select path,
       count(*)                                as requests,
       count(*) filter (where status >= 400)   as errors,
       round(avg(duration_ms))                 as avg_ms,
       max(duration_ms)                        as slowest_ms
from request_log
where ts > now() - interval '7 days'
group by path
order by requests desc;
```

A very large `slowest_ms` on the first request after a quiet spell is normal —
that is Render waking from sleep, not the app being slow.

---

## Housekeeping

Neon's free tier has a storage limit, and these tables only grow. If
`request_log` gets large, trim it — the aggregates worth keeping are small:

```sql
delete from request_log where ts < now() - interval '90 days';
```

`answer_log` is the valuable history and is far smaller. Keep it.

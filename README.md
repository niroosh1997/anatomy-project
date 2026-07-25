# Anatomy Quiz

A study app for an Anatomy B ("אנטומיה ב'") practice exam. It serves a random
multiple-choice question, checks your answer, and then links to a reference page
for each anatomical structure the question covers.

## How it works

- **Backend** (FastAPI) holds the 20 practice questions and validates answers.
  The correct answer is never sent to the browser until after you submit a
  choice, so it can't be read out of the network tab beforehand.
- **Frontend** (Vite + React) fetches a question, submits your choice, and shows
  correct/incorrect feedback plus links to the structures involved.
- **Reference pages** (`/anatomy/:name`) cover 62 structures — muscles
  (origin / insertion / action), joints (bones, type, classification, axis,
  actions), ligaments (what they connect), and bones. This content is static, so
  it lives in the frontend and needs no backend call.

## Running it

Both servers are wrapped in scripts that set up the right environment:

```bash
./run-backend-dev.sh    # FastAPI on :8000
./run-frontend-dev.sh   # Vite on :5173
```

The backend script clears `PYTHONPATH` first — a stale entry in the shell
profile otherwise shadows the virtualenv's packages.

### Checks

```bash
cd frontend
npx tsc --noEmit   # type-check
npm run lint       # eslint (js/jsx and ts/tsx)
```

## Deployment

Pushing to `main` redeploys both halves automatically:

| Part | Host | Config |
|---|---|---|
| Frontend | GitHub Pages — https://niroosh1997.github.io/anatomy-project/ | [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) |
| Backend | Render — https://anatomy-project-api.onrender.com | [`render.yaml`](render.yaml) |

Notes on how this fits together:

- The frontend build sets `base: '/anatomy-project/'` because Pages serves from
  a subpath. That is applied to builds only, so `npm run dev` still runs at
  `localhost:5173/`.
- Routing uses `HashRouter`. Pages has no server-side rewrite, so a real path
  like `/anatomy/Femur` would 404 on refresh; with a hash the route never
  reaches the server.
- The backend URL is injected at build time as `VITE_API_BASE`. Without it the
  app falls back to `http://localhost:8000` for local development.
- The backend reads `ALLOWED_ORIGINS` for CORS, defaulting to the Vite dev
  server. Render sets it to the Pages origin.
- **The backend sleeps on Render's free tier** after ~15 minutes idle, so the
  first question after a break can take 30–60 seconds while it wakes. The app
  shows "Loading question..." during that time.

## Content accuracy

Question text and the answer key are transcribed from the practice-exam PDF,
including its original typos in the answer options. The anatomy reference
content was written from standard textbook knowledge — worth spot-checking
against your course material, particularly joint classifications, where
textbooks sometimes differ.

## Images

All anatomical images come from Wikimedia Commons and are stored locally in
`frontend/public/anatomy/`. Roughly half are public domain; the rest are
CC BY-SA / CC BY / CC0 and are credited in-app beneath each image.

See [IMAGE-CREDITS.md](IMAGE-CREDITS.md) for the full per-image author, licence,
and source. Note that the CC BY-SA share-alike terms apply to those images and
to derivatives of them.

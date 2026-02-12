# Easy Access To Results

A runnable UX/UI prototype for a **friendly cPanel + user account experience** where users can attach social and music platform profiles.

## Run

```bash
npm run dev
```

Open http://localhost:3000.

## What is included

- cPanel-style dashboard navigation (Overview, Accounts, Social, Music, Security)
- User account management table UI
- Connect/disconnect interaction cards for major social and music platforms
- Live counters for connected platform totals
- API health check interaction from the UI

## Endpoints

- `GET /api/health` — service heartbeat
- `GET /api/ai` — AI placeholder endpoint

## Environment variables

Optional (already wired for status display):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

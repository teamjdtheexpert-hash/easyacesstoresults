# Easy Access To Results

This repo now includes an **offline-runnable** futuristic starter so you can run immediately in restricted environments.

## Run

```bash
npm run dev
```

Open http://localhost:3000.

## Endpoints

- `GET /api/health` — service heartbeat
- `GET /api/ai` — AI placeholder endpoint

## Environment variables

Keep using `.env.example` keys:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Why this structure?

The previous Next.js scaffold could not install dependencies due registry 403 restrictions in this environment. This version removes external install requirements so you can run and iterate now.

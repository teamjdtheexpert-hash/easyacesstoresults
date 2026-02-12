import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const port = Number(process.env.PORT || 3000);

const supabaseReady = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function json(res, code, payload) {
  res.writeHead(code, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

async function serveStatic(pathname, res) {
  const safePath = pathname.replace(/^\/+/, "");
  const filePath = join(process.cwd(), "public", safePath.replace(/^public\//, ""));
  const ext = extname(filePath);

  if (!mimeTypes[ext]) {
    return false;
  }

  try {
    const file = await readFile(filePath);
    res.writeHead(200, { "content-type": mimeTypes[ext] });
    res.end(file);
    return true;
  } catch {
    return false;
  }
}

function renderIndex() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Easy Access To Results</title>
    <link rel="stylesheet" href="/public/style.css" />
  </head>
  <body>
    <main class="container">
      <section class="card hero">
        <p class="eyebrow">Futuristic starter</p>
        <h1>Easy Access To Results</h1>
        <p class="muted">
          Your app is now runnable in this environment with API scaffolding, a futuristic UI shell,
          and Supabase-ready environment hooks.
        </p>
      </section>

      <section class="grid">
        <article class="card">⚡ Fast startup with zero external installs</article>
        <article class="card">🧩 Ready endpoints: <code>/api/health</code> and <code>/api/ai</code></article>
        <article class="card">🔐 Supabase env wiring retained</article>
        <article class="card">🚀 Can be upgraded back to Next.js when npm access is available</article>
      </section>

      <section class="card">
        <h2>Status</h2>
        <ul>
          <li>${supabaseReady ? "✅ Supabase env vars detected" : "⚠️ Add Supabase env vars in .env.local"}</li>
          <li>✅ App server is running.</li>
          <li>✅ Health endpoint available.</li>
        </ul>
        <button id="check-api">Check /api/health</button>
        <pre id="output">Click the button to test API.</pre>
      </section>
    </main>
    <script src="/public/app.js"></script>
  </body>
</html>`;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);

  if (url.pathname.startsWith("/public/")) {
    const ok = await serveStatic(url.pathname, res);
    if (ok) return;
  }

  if (url.pathname === "/api/health") {
    return json(res, 200, {
      status: "ok",
      service: "easyacesstoresults",
      runtime: "node-http",
      timestamp: new Date().toISOString(),
    });
  }

  if (url.pathname === "/api/ai") {
    return json(res, 200, {
      status: "placeholder",
      message: "AI endpoint scaffolded. Connect provider keys to enable responses.",
    });
  }

  if (url.pathname === "/") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(renderIndex());
    return;
  }

  json(res, 404, { error: "Not found" });
});

server.listen(port, () => {
  console.log(`Easy Access To Results running on http://localhost:${port}`);
});

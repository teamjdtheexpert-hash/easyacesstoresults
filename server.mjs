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

const socialPlatforms = [
  "Facebook",
  "Instagram",
  "X (Twitter)",
  "LinkedIn",
  "TikTok",
  "YouTube",
  "Snapchat",
  "Pinterest",
];

const musicPlatforms = ["Spotify", "Apple Music", "SoundCloud", "YouTube Music", "Deezer", "Tidal"];

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

function platformCard(name, type) {
  return `<article class="platform-card" data-platform="${name}" data-group="${type}" data-connected="false">
      <div>
        <p class="platform-type">${type}</p>
        <h4>${name}</h4>
        <p class="muted">Secure OAuth attach for profile sync and analytics.</p>
      </div>
      <div class="platform-actions">
        <span class="badge disconnected">Not connected</span>
        <button class="connect-btn" type="button">Connect</button>
      </div>
    </article>`;
}

function renderIndex() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Easy Access To Results | UX Portal</title>
    <link rel="stylesheet" href="/public/style.css" />
  </head>
  <body>
    <div class="app-shell">
      <aside class="sidebar card">
        <h1>Easy Access</h1>
        <p class="muted">Control Panel</p>
        <nav>
          <button class="nav-item active" data-tab="overview">Overview</button>
          <button class="nav-item" data-tab="accounts">User Accounts</button>
          <button class="nav-item" data-tab="social">Social Platforms</button>
          <button class="nav-item" data-tab="music">Music Platforms</button>
          <button class="nav-item" data-tab="security">Security & Access</button>
        </nav>
      </aside>

      <main>
        <header class="card topbar">
          <div>
            <p class="eyebrow">UX/UI Prototype</p>
            <h2>Friendly dashboard for account linking</h2>
          </div>
          <div class="profile-pill">
            <div class="avatar">AR</div>
            <div>
              <strong>Admin User</strong>
              <p class="muted">admin@easyaccess.app</p>
            </div>
          </div>
        </header>

        <section class="panel active" id="overview">
          <div class="stats-grid">
            <article class="card stat"><p>Total Users</p><h3>1,284</h3></article>
            <article class="card stat"><p>Connected Social</p><h3 id="social-count">0 / ${socialPlatforms.length}</h3></article>
            <article class="card stat"><p>Connected Music</p><h3 id="music-count">0 / ${musicPlatforms.length}</h3></article>
            <article class="card stat"><p>Supabase</p><h3>${supabaseReady ? "Ready" : "Needs config"}</h3></article>
          </div>
          <article class="card">
            <h3>Product UX Flow</h3>
            <ol>
              <li>User signs in or creates account.</li>
              <li>User opens cPanel and selects a platform.</li>
              <li>User clicks <em>Connect</em> and confirms OAuth.</li>
              <li>Profile data and media stats sync to dashboard.</li>
            </ol>
          </article>
        </section>

        <section class="panel" id="accounts">
          <article class="card">
            <h3>User Account Management</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>User</th><th>Role</th><th>Plan</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  <tr><td>Ariana Roy</td><td>Admin</td><td>Enterprise</td><td><span class="badge connected">Active</span></td><td><button class="ghost">Open</button></td></tr>
                  <tr><td>Michael Lee</td><td>Manager</td><td>Pro</td><td><span class="badge connected">Active</span></td><td><button class="ghost">Open</button></td></tr>
                  <tr><td>Sofia Khan</td><td>Creator</td><td>Starter</td><td><span class="badge disconnected">Pending</span></td><td><button class="ghost">Invite</button></td></tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section class="panel" id="social">
          <article class="card">
            <h3>Attach Social Profiles</h3>
            <p class="muted">Connect all major social channels for profile sync, posting permissions, and analytics.</p>
            <div class="platform-grid">${socialPlatforms.map((name) => platformCard(name, "Social")).join("")}</div>
          </article>
        </section>

        <section class="panel" id="music">
          <article class="card">
            <h3>Attach Music Platforms</h3>
            <p class="muted">Link artist and listener profiles across streaming services.</p>
            <div class="platform-grid">${musicPlatforms.map((name) => platformCard(name, "Music")).join("")}</div>
          </article>
        </section>

        <section class="panel" id="security">
          <article class="card">
            <h3>Security & Access</h3>
            <ul>
              <li>✅ Multi-account session handling design included</li>
              <li>✅ OAuth callback slots ready (\`/api/oauth/:provider\` planned)</li>
              <li>✅ API health endpoint available now</li>
              <li>${supabaseReady ? "✅ Supabase credentials detected" : "⚠️ Add Supabase env vars in .env.local"}</li>
            </ul>
            <button id="check-api">Check API Health</button>
            <pre id="output">Click to verify /api/health response.</pre>
          </article>
        </section>
      </main>
    </div>
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

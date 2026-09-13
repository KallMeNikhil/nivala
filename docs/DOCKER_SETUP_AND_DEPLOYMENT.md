# Docker Setup & Deployment

## 1. Overview

Nivāla is a fully static site: Vite + vanilla HTML/CSS/JS, no backend, no database, no
CMS, no environment variables. Because of that, Docker's job here is narrow and honest:
it gives you a Node environment to run the Vite dev server, and an nginx container to
preview the production build - it does not need to orchestrate multiple services,
because there is only one.

You still need Docker Desktop (or Docker Engine + Compose) installed. You do not need
Node.js, npm, or any database installed on your host.

```
Browser
   |
   v
Vite dev server (dev container, :5173)      <- local development
   or
nginx serving dist/ (preview container, :8080)  <- production-build preview
```

## 2. Prerequisites

**Required on host**
- Docker Desktop (macOS/Windows) or Docker Engine + the Compose plugin (Linux)

**NOT required on host**
- Node.js / npm
- Any database (the project has none)

## 3. Installation

- **Windows / macOS**: install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and start it.
- **Linux**: install Docker Engine and the Compose plugin per your distro's instructions, then `sudo systemctl enable --now docker`.

Verify with:
```
docker --version
docker compose version
```

## 4. Repository setup

```
git clone <repository>
cd nivala
```

## 5. Environment setup

None needed. The project has zero environment variables - there is no `.env.example`
because there is nothing to configure (no API keys, no database URL, no secrets).

## 6. First startup (development)

```
docker compose up --build
```

This builds the `dev` target (Node 22, `npm ci`, Vite dev server) and starts it with
your source directory bind-mounted, so edits on your host are picked up immediately.

Open **http://localhost:5173**.

## 7. Accessing the application

| What | URL |
|---|---|
| Dev server (hot reload) | http://localhost:5173 |
| Production-build preview | http://localhost:8080 (see §9) |

## 8. Development workflow

- **Start**: `docker compose up --build`
- **Start in background**: `docker compose up -d --build`
- **Stop**: `docker compose down`
- **Rebuild after a dependency change** (`package.json`/`package-lock.json`): `docker compose build dev`
- **View logs**: `docker compose logs -f dev`
- **Shell into the container**: `docker compose exec dev sh`
- **Hot reload**: the `dev` service bind-mounts the repo into `/app`, with an
  anonymous volume over `/app/node_modules` so the container's own
  `node_modules` (installed for the container's Linux/Node target) isn't
  clobbered by your host's. Vite's file watcher runs with `CHOKIDAR_USEPOLLING=true`
  so changes are detected reliably inside Docker's filesystem layer.

## 9. Production-build preview

To check what the actual `npm run build` output looks like, served the way it would be
in production (minified, asset-hashed, via nginx rather than Vite's dev server):

```
docker compose --profile preview up --build preview
```

Open **http://localhost:8080**. This is a local sanity check only - see §13 for the
actual deployment target (Vercel), which builds and serves the site itself and does
not use this container.

## 10. Database workflow

Not applicable - this project has no database.

## 11. Troubleshooting

- **Docker daemon isn't running**: start Docker Desktop, or `sudo systemctl start docker` on Linux.
- **Port already in use**: something else is bound to 5173 or 8080. Either stop it or edit the port mapping in `docker-compose.yml` (e.g. `"5174:5173"`).
- **Container starts then exits immediately**: check `docker compose logs dev` - usually a failed `npm ci` from a stale `package-lock.json` mismatch; run `docker compose build --no-cache dev`.
- **Edits not showing up**: confirm the `dev` service (not `preview`) is running - `preview` serves a static, one-time build and won't reflect new edits until rebuilt.
- **Stale dependencies after adding a package**: `docker compose build --no-cache dev` to force a clean `npm ci`.
- **Build cache problems**: `docker compose build --no-cache <service>`.

## 12. Clean reset

```
docker compose down
```

Removes the containers. There are no named volumes with persistent data in this
project (no database), so there is no `-v` data-loss concern here - `docker compose down -v`
is safe to run if you want to also drop the anonymous `node_modules` volume.

## 13. Production architecture

Nivāla deploys as a static site directly to Vercel - Docker is not part of the
production deployment path; it's a local dev/preview convenience only:
`npm run build` → `dist/` → Vercel's static hosting, zero-config for a Vite project.

```
Browser
   |
   v
Vercel CDN (static dist/ output)
```

## 14. Vercel deployment

1. Push the repository to GitHub.
2. In Vercel, "Add New Project" → import the repository.
3. Framework preset: Vite (auto-detected). Root directory: repository root.
4. Build command: `npm run build` (default). Output directory: `dist` (default).
5. Environment variables: none required.
6. Deploy. Vercel gives you a production URL.
7. Once you have that real URL, add it to `<link rel="canonical">`, `og:url`, and the
   JSON-LD `image`/`url` fields in `index.html`.

No `vercel.json` is needed - Vite projects are zero-config on Vercel, and this project
has no rewrites, redirects, or serverless functions that would require one.

## 15. Render deployment

Not applicable. There is no backend service to deploy - Render (or any Node-hosting
platform) has nothing to run for this project.

## 16. Production environment variables

| Variable | Local | Production | Where configured | Purpose |
|---|---|---|---|---|
| *(none)* | - | - | - | The project has no environment variables. |

## 17. Deployment verification

- [ ] Site loads at the Vercel URL
- [ ] Category filter works
- [ ] Dietary filter works, including combined filters and the zero-result "Clear filters" state
- [ ] Mobile nav opens/closes and traps focus
- [ ] `tel:` / `mailto:` / map links resolve correctly
- [ ] OG/Twitter preview renders correctly (e.g. via a social-preview debugger) once the canonical URL is added
- [ ] Lighthouse Performance / Accessibility / Best Practices / SEO all in the green range

## 18. Architecture diagram

```
Development:
  Browser --> http://localhost:5173 --> [dev container: Vite dev server]

Preview:
  Browser --> http://localhost:8080 --> [preview container: nginx + dist/]

Production:
  Browser --> Vercel CDN (static dist/ output, no containers involved)
```

## 19. "Fresh machine" quick start

1. Install Docker Desktop.
2. `git clone <repository> && cd nivala`
3. No secrets to configure - the project has none.
4. `docker compose up --build`
5. Open http://localhost:5173

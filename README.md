# Arna — Website

Public marketing site for **Arna**, served at `arna.ifleon.com`. Vue 3 + Vite +
Tailwind, built to static files and served by **nginx** in a Docker container.

Part of the **Siri ecosystem**. The Arna platform itself (apps + backend) lives in
the separate [`arna`](https://github.com/mahiprime2001/arna) repository.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static site to dist/
```

## Deploy (Docker)

Self-contained — nginx serves the built site, Caddy terminates HTTPS:

```bash
docker compose up -d --build
```

Point the `arna.ifleon.com` A-record at the host first; Caddy obtains the TLS
certificate automatically.

> If you host this behind an existing reverse proxy on ifleon, you can drop the
> `caddy` service and just run the `website` container (it listens on port 80).

## Stack

Vue 3 · Vite · Tailwind CSS · nginx · Docker

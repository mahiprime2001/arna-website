# Arna — Website

Public marketing site for **Arna**, served at `arna.ifleon.com`. Vue 3 + Vite +
Tailwind, built to static files and served by **nginx** in a Docker container.

Part of the **Siri ecosystem**. The Arna platform itself (apps + backend) lives in
the separate [`arna`](https://github.com/mahiprime2001/arna) repository.

## Develop

```bash
npm install
npm run dev      # http://localhost:4300
npm run build    # outputs static site to dist/
```

## Deploy (Docker, behind host nginx)

The container serves the built static site with nginx and listens on the host at
**`127.0.0.1:4300`** (container port `80`). Your existing host nginx sits in front
and serves `https://arna.ifleon.com`.

```bash
docker compose up -d --build          # site now on 127.0.0.1:4300
```

Then wire up host nginx + HTTPS:

```bash
sudo cp nginx/arna.ifleon.com.conf /etc/nginx/sites-available/arna.ifleon.com
sudo ln -s /etc/nginx/sites-available/arna.ifleon.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d arna.ifleon.com     # adds the SSL block automatically
```

Point the `arna.ifleon.com` A-record at the host first. To change the port, edit
the `ports:` mapping in `docker-compose.yml` and the `proxy_pass` in the nginx conf.

## Stack

Vue 3 · Vite · Tailwind CSS · nginx · Docker

# Deploying the Arna website (Ubuntu + nginx)

Every step, from a fresh server to a live HTTPS site. The site runs in Docker on
`127.0.0.1:4300`; the host's nginx fronts it and serves `https://arna.ifleon.com`.

---

## 0. DNS (do this first)

Point an **A record** for `arna.ifleon.com` at the server's public IP, then verify:

```bash
dig +short arna.ifleon.com      # should print your server IP
```

Wait until it returns the right IP before doing the certbot step.

---

## 1. Install Docker (skip if already installed)

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER     # then log out + back in so this applies
docker --version
docker compose version
```

## 2. Install nginx + certbot (skip if already installed)

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

## 3. Open the firewall (if ufw is enabled)

```bash
sudo ufw allow 'Nginx Full'      # opens 80 + 443
sudo ufw status
```

---

## 4. Get the code (private repo — pick one auth method)

The repo is **private**, so a plain `git clone` will fail with "authentication
failed". Use one of these:

**Option A — GitHub CLI (simplest):**

```bash
# install gh (Debian/Ubuntu)
sudo apt install -y gh
gh auth login            # choose GitHub.com → HTTPS → login with a browser/code
gh repo clone mahiprime2001/arna-website
cd arna-website
```

**Option B — Personal access token (good for a server):**

Create a token at GitHub → Settings → Developer settings → **Fine-grained tokens**
(give it read access to this repo), then:

```bash
git clone https://<YOUR_TOKEN>@github.com/mahiprime2001/arna-website.git
cd arna-website
```

**Option C — SSH deploy key (no account login on the box):**

```bash
ssh-keygen -t ed25519 -C "arna-website-deploy" -f ~/.ssh/arna_deploy -N ""
cat ~/.ssh/arna_deploy.pub
# Paste that key into GitHub → repo → Settings → Deploy keys → Add deploy key
echo "Host github.com-arna
  HostName github.com
  User git
  IdentityFile ~/.ssh/arna_deploy" >> ~/.ssh/config
git clone git@github.com-arna:mahiprime2001/arna-website.git
cd arna-website
```

> For unattended updates later, **Option C** is best — no tokens to rotate.

## 5. Build & start the container

```bash
docker compose up -d --build
docker compose ps               # website should be "running"
```

## 6. Check the container is serving locally

```bash
curl -I http://127.0.0.1:4300   # expect: HTTP/1.1 200 OK
```

If this is not 200, fix it before touching nginx: `docker compose logs website`.

---

## 7. Add the nginx site

```bash
sudo cp nginx/arna.ifleon.com.conf /etc/nginx/sites-available/arna.ifleon.com
sudo ln -s /etc/nginx/sites-available/arna.ifleon.com /etc/nginx/sites-enabled/
```

> On distros without `sites-enabled` (e.g. RHEL/CentOS), copy it to
> `/etc/nginx/conf.d/arna.ifleon.com.conf` instead and skip the symlink.

## 8. Test the config and reload

```bash
sudo nginx -t                   # must say "syntax is ok" / "test is successful"
sudo systemctl reload nginx
```

## 9. Check HTTP works

```bash
curl -I http://arna.ifleon.com  # expect: HTTP/1.1 200 OK
```

---

## 10. Enable HTTPS (certbot)

```bash
sudo certbot --nginx -d arna.ifleon.com
```

Answer the prompts (email, agree to terms, and choose **redirect HTTP → HTTPS**).
Certbot edits the nginx file to add the SSL block + redirect automatically.

## 11. Verify it's live

Open **https://arna.ifleon.com** in a browser, or:

```bash
curl -I https://arna.ifleon.com # expect: HTTP/2 200
```

## 12. Confirm auto-renewal

```bash
sudo certbot renew --dry-run    # certs renew automatically via systemd timer
```

---

## Day-to-day commands

```bash
# Update the site after new commits:
git pull
docker compose up -d --build

# Logs / status:
docker compose logs -f website
docker compose ps

# Restart / stop:
docker compose restart website
docker compose down
```

## Troubleshooting

| Symptom | Check |
|---|---|
| `nginx -t` fails | Re-read the file you pasted; look at the line it names |
| 502 Bad Gateway | Container down or wrong port → `docker compose ps`, `curl -I http://127.0.0.1:4300` |
| certbot can't validate | DNS not pointing at this server yet (`dig +short arna.ifleon.com`), or port 80 blocked |
| Port 4300 already in use | Change it in `docker-compose.yml` **and** `nginx/arna.ifleon.com.conf`, then `up -d` + reload nginx |
| Blank page | `docker compose logs website`; rebuild with `--build` |

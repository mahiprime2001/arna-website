<script setup lang="ts">
const GITHUB = "https://github.com/mahiprime2001/arna";

const perks = [
  { emoji: "🏠", title: "Your data stays home", desc: "Screens, files, and chat never touch anyone else's server." },
  { emoji: "🔧", title: "Yours to bend", desc: "Open source — fork it, brand it, wire it into your own tools." },
  { emoji: "🚫", title: "No accounts, no fees", desc: "No per-seat pricing, no sign-ups, no limits. Run it however you like." },
];

const steps = [
  {
    n: "1",
    title: "Grab the code",
    desc: "Clone the repo — apps, backend, and infra all live here.",
    code: "git clone https://github.com/mahiprime2001/arna\ncd arna",
  },
  {
    n: "2",
    title: "Bring up the server",
    desc: "One compose file runs the signaling backend, the coturn relay, and HTTPS via Caddy.",
    code: "cd infra\ncp .env.example .env   # set your domain\ndocker compose up -d",
  },
  {
    n: "3",
    title: "Point the apps at it",
    desc: "In the Console and Agent, set the server address to your own — and you're fully self-hosted.",
    code: "wss://arna.yourdomain.com/ws",
  },
];
</script>

<template>
  <div>
    <section class="dots px-6 py-16 text-center">
      <p class="mb-5 inline-block -rotate-2 rounded-full border-4 border-ink bg-sun px-4 py-1.5 font-display text-sm font-bold shadow-popsm">For developers</p>
      <h1 class="font-display text-5xl font-extrabold md:text-6xl">Run it on your own server 🏠</h1>
      <p class="mx-auto mt-5 max-w-xl text-lg font-semibold text-ink/70">
        Prefer not to use the hosted version? The whole stack is open source and self-hosts in a few commands.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a :href="GITHUB" target="_blank" rel="noopener" class="rounded-2xl border-4 border-ink bg-coral px-7 py-3.5 font-display text-lg font-extrabold text-white shadow-pop pop">
          View on GitHub ★
        </a>
        <a :href="GITHUB + '/blob/main/docs/PROTOCOL.md'" target="_blank" rel="noopener" class="rounded-2xl border-4 border-ink bg-white px-7 py-3.5 font-display text-lg font-extrabold shadow-pop pop">
          Read the docs
        </a>
      </div>
    </section>

    <!-- Why self-host -->
    <section class="mx-auto max-w-5xl px-6 pb-8">
      <div class="grid gap-5 sm:grid-cols-3">
        <div v-for="(p, i) in perks" :key="p.title" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="rounded-3xl border-4 border-ink bg-white p-6 shadow-pop">
          <div class="text-4xl">{{ p.emoji }}</div>
          <h3 class="mt-3 font-display text-xl font-extrabold">{{ p.title }}</h3>
          <p class="mt-1 font-semibold text-ink/70">{{ p.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Quickstart -->
    <section class="dots border-y-4 border-ink bg-sky/20 py-16">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-center font-display text-3xl font-extrabold md:text-4xl">Quickstart 🚀</h2>
        <p class="mx-auto mb-12 mt-3 max-w-md text-center font-semibold text-ink/70">Three steps and you're hosting Arna yourself.</p>

        <div class="space-y-6">
          <div v-for="s in steps" :key="s.n" class="rounded-3xl border-4 border-ink bg-white p-6 shadow-pop">
            <div class="flex items-center gap-3">
              <span class="grid h-11 w-11 place-items-center rounded-2xl border-4 border-ink bg-sun font-display text-xl font-extrabold shadow-popsm">{{ s.n }}</span>
              <h3 class="font-display text-xl font-extrabold">{{ s.title }}</h3>
            </div>
            <p class="mt-3 font-semibold text-ink/75">{{ s.desc }}</p>
            <pre class="mt-4 overflow-x-auto rounded-xl border-4 border-ink bg-ink p-4 font-mono text-sm leading-relaxed text-mint"><code>{{ s.code }}</code></pre>
          </div>
        </div>

        <p class="mx-auto mt-8 max-w-md text-center font-semibold text-ink/60">
          Need TLS, a domain, and coturn creds wired up? The repo's
          <a :href="GITHUB + '/blob/main/infra'" target="_blank" rel="noopener" class="font-extrabold text-coral underline">infra</a>
          folder and DEPLOY guide walk through it.
        </p>
      </div>
    </section>

    <!-- Architecture note -->
    <section class="mx-auto max-w-4xl px-6 py-16">
      <div class="rounded-3xl border-4 border-ink bg-white p-8 shadow-pop">
        <h2 class="font-display text-2xl font-extrabold">What you're running 🧩</h2>
        <p class="mt-2 font-semibold text-ink/70">A tiny, boring stack — easy to run, easy to trust.</p>
        <ul class="mt-5 grid gap-3 sm:grid-cols-2">
          <li class="flex items-start gap-2 font-semibold text-ink/80"><span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink bg-sky text-xs">⚙️</span><b class="mr-1">Backend</b> — small Rust signaling server (the matchmaker).</li>
          <li class="flex items-start gap-2 font-semibold text-ink/80"><span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink bg-sun text-xs">🔁</span><b class="mr-1">coturn</b> — relay for tricky networks.</li>
          <li class="flex items-start gap-2 font-semibold text-ink/80"><span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink bg-mint text-xs">🔒</span><b class="mr-1">Caddy</b> — automatic HTTPS in front.</li>
          <li class="flex items-start gap-2 font-semibold text-ink/80"><span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink bg-coral text-xs">🖥️</span><b class="mr-1">Apps</b> — the desktop Console &amp; Agent, pointed at your server.</li>
        </ul>
        <p class="mt-5 font-semibold text-ink/60">
          The server is just a matchmaker — screens and files flow <b>directly between the two PCs</b>,
          end-to-end encrypted. It never sees your content.
        </p>
      </div>
    </section>
  </div>
</template>

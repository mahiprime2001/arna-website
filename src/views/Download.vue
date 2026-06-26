<script setup lang="ts">
const RELEASES = "https://github.com/mahiprime2001/arna/releases";

const apps = [
  {
    name: "Console",
    emoji: "🎮",
    color: "bg-sky",
    rotate: "-rotate-2",
    desc: "Install this on your machine — the one you'll control from. See screens, send files, chat.",
  },
  {
    name: "Agent",
    emoji: "🖥️",
    color: "bg-sun",
    rotate: "rotate-2",
    desc: "Install this on the machine you want to reach. It shows the Accept popup and shares the screen.",
  },
];

const platforms = [
  { os: "Windows", emoji: "🪟", status: "First release", ready: true },
  { os: "macOS", emoji: "🍎", status: "Soon", ready: false },
  { os: "Linux", emoji: "🐧", status: "Soon", ready: false },
];
</script>

<template>
  <div>
    <section class="dots px-6 py-16 text-center">
      <p class="mb-5 inline-block -rotate-2 rounded-full border-4 border-ink bg-coral px-4 py-1.5 font-display text-sm font-bold text-white shadow-popsm">Get started — free</p>
      <h1 class="font-display text-5xl font-extrabold md:text-6xl">Grab the apps 📥</h1>
      <p class="mx-auto mt-5 max-w-xl text-lg font-semibold text-ink/70">
        Two little apps: <b>Console</b> on your side, <b>Agent</b> on the machine you want to reach.
      </p>
    </section>

    <!-- Two apps -->
    <section class="mx-auto max-w-5xl px-6 pb-6">
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="a in apps" :key="a.name" :class="a.rotate" class="rounded-3xl border-4 border-ink bg-white p-7 shadow-pop">
          <div :class="a.color" class="grid h-20 w-20 place-items-center rounded-3xl border-4 border-ink text-4xl shadow-popsm">{{ a.emoji }}</div>
          <h2 class="mt-4 font-display text-2xl font-extrabold">{{ a.name }}</h2>
          <p class="mt-2 font-semibold text-ink/75">{{ a.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Platforms -->
    <section class="mx-auto max-w-5xl px-6 py-10">
      <div class="rounded-3xl border-4 border-ink bg-ink p-8 text-cream shadow-poplg">
        <h2 class="text-center font-display text-2xl font-extrabold">Pick your platform</h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-3">
          <a
            v-for="p in platforms"
            :key="p.os"
            :href="RELEASES"
            target="_blank"
            rel="noopener"
            class="rounded-2xl border-4 border-ink bg-cream p-5 text-center text-ink shadow-pop pop"
          >
            <div class="text-4xl">{{ p.emoji }}</div>
            <div class="mt-2 font-display text-xl font-extrabold">{{ p.os }}</div>
            <span
              class="mt-2 inline-block rounded-full border-2 border-ink px-3 py-0.5 font-display text-xs font-extrabold"
              :class="p.ready ? 'bg-mint' : 'bg-white text-ink/60'"
            >
              {{ p.status }}
            </span>
          </a>
        </div>
        <p class="mt-5 text-center font-semibold text-cream/70">
          Builds are published per release on
          <a :href="RELEASES" target="_blank" rel="noopener" class="font-extrabold text-sun underline">GitHub</a>.
        </p>
      </div>
    </section>

    <!-- Which server -->
    <section class="mx-auto max-w-5xl px-6 pb-20">
      <h2 class="text-center font-display text-3xl font-extrabold md:text-4xl">Which server? 🌐</h2>
      <p class="mx-auto mb-10 mt-3 max-w-lg text-center font-semibold text-ink/70">Same apps either way — just a setting.</p>
      <div class="grid gap-6 md:grid-cols-2">
        <div class="-rotate-1 rounded-3xl border-4 border-ink bg-sky/40 p-7 shadow-pop">
          <div class="text-4xl">☁️</div>
          <h3 class="mt-3 font-display text-2xl font-extrabold">Hosted (default)</h3>
          <p class="mt-2 font-semibold text-ink/75">Leave it as-is and the apps use our hosted server. Sign up and connect — nothing to configure.</p>
        </div>
        <div class="rotate-1 rounded-3xl border-4 border-ink bg-sun/40 p-7 shadow-pop">
          <div class="text-4xl">🏠</div>
          <h3 class="mt-3 font-display text-2xl font-extrabold">Your own server</h3>
          <p class="mt-2 font-semibold text-ink/75">
            Self-hosting? Set the server address to your own and you're fully independent.
            <RouterLink to="/self-host" class="font-extrabold text-coral underline">Self-host guide →</RouterLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

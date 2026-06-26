<script setup lang="ts">
const live = [
  {
    name: "Remote control",
    emoji: "🖥️",
    color: "bg-sky",
    blurb: "See the other screen as smooth live video and drive it like you're sitting there.",
    points: ["Real H.264 video, not laggy snapshots", "Full mouse + keyboard", "Fullscreen view", "Works on any network"],
  },
  {
    name: "Ask-first consent",
    emoji: "🛡️",
    color: "bg-sun",
    blurb: "Nobody connects in secret. The other PC gets a popup with a one-time code and chooses.",
    points: ["Accept / Decline popup", "6-digit session code", "Optional sign-in / SSO check", "They can end it any time"],
  },
  {
    name: "Files, both ways",
    emoji: "📦",
    color: "bg-grape",
    blurb: "Push a file to the remote PC, or pull one back — straight PC-to-PC.",
    points: ["Drag-and-drop to send", "Download a file from the remote PC", "Peer-to-peer (big files skip the server)", "The other side picks what leaves their PC"],
  },
  {
    name: "Live chat",
    emoji: "💬",
    color: "bg-mint",
    blurb: "Talk to the person at the other machine without leaving the session.",
    points: ["In-session chat panel", "Pops up on their side too", "Unread badges", "Encrypted like everything else"],
  },
];

const soon = [
  { name: "Fleet dashboard", emoji: "📊", desc: "Every device's health — online, disk, status — and one-click remote fixes." },
  { name: "Meet", emoji: "🎥", desc: "Teams-style audio/video calls with screen share, on the same engine." },
  { name: "SSH & FTP", emoji: "🐚", desc: "Open a terminal or move files across all your servers, right inside Arna." },
  { name: "Multi-monitor", emoji: "🖥️", desc: "Pick which screen to view when the remote PC has more than one." },
];
</script>

<template>
  <div>
    <section class="dots px-6 py-16 text-center">
      <p class="mb-5 inline-block -rotate-2 rounded-full border-4 border-ink bg-sky px-4 py-1.5 font-display text-sm font-bold shadow-popsm">Everything it does</p>
      <h1 class="font-display text-5xl font-extrabold md:text-6xl">The whole toolkit 🧰</h1>
      <p class="mx-auto mt-5 max-w-xl text-lg font-semibold text-ink/70">
        One connection, lots of superpowers — and more landing every release.
      </p>
    </section>

    <!-- Live features -->
    <section class="mx-auto max-w-5xl space-y-8 px-6 pb-8">
      <div
        v-for="(f, i) in live"
        :key="f.name"
        class="grid items-center gap-6 rounded-3xl border-4 border-ink bg-white p-7 shadow-pop md:grid-cols-[auto,1fr] md:p-9"
      >
        <div :class="[f.color, i % 2 ? 'rotate-2' : '-rotate-2']" class="grid h-24 w-24 place-items-center rounded-3xl border-4 border-ink text-5xl shadow-popsm">
          {{ f.emoji }}
        </div>
        <div>
          <div class="flex flex-wrap items-center gap-3">
            <h2 class="font-display text-3xl font-extrabold">{{ f.name }}</h2>
            <span class="rounded-full border-2 border-ink bg-mint px-3 py-0.5 font-display text-sm font-extrabold">Live ✅</span>
          </div>
          <p class="mt-2 text-lg font-semibold text-ink/75">{{ f.blurb }}</p>
          <ul class="mt-4 grid gap-2 sm:grid-cols-2">
            <li v-for="p in f.points" :key="p" class="flex items-start gap-2 font-semibold text-ink/80">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink bg-sun text-xs">✓</span>{{ p }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Coming soon -->
    <section class="dots border-t-4 border-ink bg-bubble/20 py-16">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center font-display text-3xl font-extrabold md:text-4xl">On the way 🚧</h2>
        <p class="mx-auto mb-10 mt-3 max-w-lg text-center font-semibold text-ink/70">Built on the same engine, shipping tool by tool.</p>
        <div class="grid gap-5 sm:grid-cols-2">
          <div v-for="s in soon" :key="s.name" class="flex items-start gap-4 rounded-2xl border-4 border-dashed border-ink bg-white p-5">
            <span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-4 border-ink bg-cream text-2xl">{{ s.emoji }}</span>
            <div>
              <h3 class="font-display text-xl font-extrabold">{{ s.name }}</h3>
              <p class="mt-1 font-semibold text-ink/70">{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- security strip -->
    <section class="mx-auto max-w-4xl px-6 py-16 text-center">
      <div class="rounded-3xl border-4 border-ink bg-ink p-9 text-cream shadow-poplg">
        <div class="text-4xl">🔒</div>
        <h2 class="mt-3 font-display text-3xl font-extrabold">Encrypted end to end</h2>
        <p class="mx-auto mt-3 max-w-xl font-semibold text-cream/80">
          Screens, files, and chat are scrambled the whole way across — the server only helps the two
          sides find each other, it never sees what flows between them. Self-host and it never even
          leaves your network.
        </p>
        <RouterLink to="/security" class="mt-6 inline-block rounded-xl border-4 border-ink bg-sun px-5 py-2.5 font-display font-extrabold text-ink shadow-popsm pop">
          How security works →
        </RouterLink>
      </div>
    </section>

    <section class="px-6 pb-20 text-center">
      <RouterLink to="/download" class="inline-block rounded-2xl border-4 border-ink bg-coral px-8 py-4 font-display text-lg font-extrabold text-white shadow-pop pop">
        Get started — free 🎉
      </RouterLink>
    </section>
  </div>
</template>

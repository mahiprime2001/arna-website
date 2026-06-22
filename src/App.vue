<script setup lang="ts">
const modules = [
  {
    name: "Remote",
    desc: "Full control of any store PC — screen, mouse, keyboard, multi-monitor.",
    emoji: "🖥️",
    color: "bg-sky",
    rotate: "-rotate-2",
  },
  {
    name: "Fleet",
    desc: "Live health of every store — disk, queues, status — and one-click remote fixes.",
    emoji: "📊",
    color: "bg-sun",
    rotate: "rotate-2",
  },
  {
    name: "Chat",
    desc: "Live and persistent messaging, with broadcast to every store at once.",
    emoji: "💬",
    color: "bg-mint",
    rotate: "-rotate-1",
  },
  {
    name: "Meet",
    desc: "Audio and video calls with screen share — built on the same engine.",
    emoji: "🎥",
    color: "bg-coral",
    rotate: "rotate-1",
  },
  {
    name: "Files",
    desc: "Drag-and-drop transfer, peer-to-peer for big files, both directions.",
    emoji: "📦",
    color: "bg-grape",
    rotate: "-rotate-2",
  },
];

const roadmap = [
  {
    phase: "Now",
    title: "Remote control + Fleet health",
    desc: "Take over any store PC, and watch every store's health from one dashboard.",
    emoji: "🚀",
    color: "bg-sun",
    done: true,
  },
  {
    phase: "Next",
    title: "Files + Chat",
    desc: "Drag-and-drop file sharing and live messaging on the same connection.",
    emoji: "💬",
    color: "bg-mint",
    done: false,
  },
  {
    phase: "Soon",
    title: "Meet — calls & screen share",
    desc: "Teams-style audio/video meetings with screen share, built right in.",
    emoji: "🎥",
    color: "bg-coral",
    done: false,
  },
  {
    phase: "Later",
    title: "Broadcast, recording & roles",
    desc: "Announce to all stores, record sessions, and fine-grained access + audit.",
    emoji: "🌟",
    color: "bg-grape",
    done: false,
  },
];

const year = new Date().getFullYear();
</script>

<template>
  <main class="min-h-screen overflow-x-hidden font-body">
    <!-- Nav -->
    <header class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div class="flex items-center gap-3">
        <span
          class="grid h-11 w-11 place-items-center rounded-2xl border-4 border-ink bg-sun text-xl shadow-popsm"
          >🦄</span
        >
        <span class="font-display text-2xl font-extrabold">Arna</span>
      </div>
      <nav class="flex items-center gap-3">
        <a
          href="#modules"
          class="hidden rounded-xl border-4 border-ink bg-white px-4 py-2 font-display font-bold shadow-popsm pop sm:inline-block"
          >Platform</a
        >
        <a
          href="#roadmap"
          class="hidden rounded-xl border-4 border-ink bg-white px-4 py-2 font-display font-bold shadow-popsm pop sm:inline-block"
          >Roadmap</a
        >
        <a
          href="#download"
          class="rounded-xl border-4 border-ink bg-coral px-4 py-2 font-display font-bold text-white shadow-popsm pop"
          >Download</a
        >
      </nav>
    </header>

    <!-- Hero -->
    <section class="dots relative">
      <!-- floating doodles -->
      <span class="animate-floaty absolute left-[8%] top-24 text-5xl" aria-hidden="true">⭐</span>
      <span
        class="animate-wiggle absolute right-[10%] top-32 text-5xl"
        style="animation-delay: -1s"
        aria-hidden="true"
        >☁️</span
      >
      <span
        class="animate-floaty absolute bottom-10 left-[14%] text-4xl"
        style="animation-delay: -2s"
        aria-hidden="true"
        >✨</span
      >

      <div class="mx-auto max-w-5xl px-6 py-24 text-center">
        <p
          class="mb-6 inline-block -rotate-2 rounded-full border-4 border-ink bg-bubble px-4 py-1.5 font-display text-sm font-bold text-ink shadow-popsm"
        >
          Self-hosted · end-to-end encrypted 🔒
        </p>
        <h1 class="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
          Remote control for your
          <span class="relative whitespace-nowrap">
            <span
              class="relative z-10 rounded-2xl border-4 border-ink bg-sun px-3 shadow-pop"
              >whole crew</span
            >
          </span>
          of stores
        </h1>
        <p class="mx-auto mt-8 max-w-xl text-lg font-semibold text-ink/70">
          One friendly app to support, monitor, message, and meet across every store —
          running on your own infrastructure, owned end to end.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#download"
            class="rounded-2xl border-4 border-ink bg-coral px-7 py-3.5 font-display text-lg font-extrabold text-white shadow-pop pop"
            >Download the app 🎉</a
          >
          <a
            href="#modules"
            class="rounded-2xl border-4 border-ink bg-white px-7 py-3.5 font-display text-lg font-extrabold shadow-pop pop"
            >See the tools</a
          >
        </div>
      </div>
    </section>

    <!-- Modules -->
    <section id="modules" class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">
        One app, <span class="text-grape">many tools</span> 🧰
      </h2>
      <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">
        Every tool runs on the same engine — so it's one happy platform, not five products.
      </p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="m in modules"
          :key="m.name"
          :class="[m.color, m.rotate]"
          class="rounded-3xl border-4 border-ink p-6 shadow-pop pop"
        >
          <div class="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink bg-white text-3xl">
            {{ m.emoji }}
          </div>
          <h3 class="font-display text-2xl font-extrabold">{{ m.name }}</h3>
          <p class="mt-2 font-semibold leading-relaxed text-ink/80">{{ m.desc }}</p>
        </div>
        <div
          class="grid place-items-center rounded-3xl border-4 border-dashed border-ink bg-white p-6 text-center"
        >
          <p class="font-display text-xl font-extrabold text-ink/70">
            More tools,<br />same foundation 🌱
          </p>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section id="roadmap" class="dots border-y-4 border-ink bg-white/40 py-20">
      <div class="mx-auto max-w-4xl px-6">
        <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">
          The <span class="text-coral">adventure</span> ahead 🗺️
        </h2>
        <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">
          We ship it tool by tool — here's what's landed and what's coming next.
        </p>

        <ol class="relative space-y-6">
          <li
            v-for="(step, i) in roadmap"
            :key="step.title"
            class="flex items-stretch gap-4 sm:gap-6"
          >
            <!-- step badge + connector -->
            <div class="flex flex-col items-center">
              <span
                :class="step.color"
                class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-4 border-ink text-2xl shadow-popsm"
                >{{ step.emoji }}</span
              >
              <span
                v-if="i < roadmap.length - 1"
                class="my-1 w-1 flex-1 rounded-full bg-ink/20"
              />
            </div>
            <!-- card -->
            <div
              class="mb-2 flex-1 rounded-2xl border-4 border-ink bg-white p-5 shadow-pop"
            >
              <div class="flex flex-wrap items-center gap-2">
                <span
                  :class="step.color"
                  class="rounded-full border-2 border-ink px-3 py-0.5 font-display text-sm font-extrabold"
                  >{{ step.phase }}</span
                >
                <span
                  v-if="step.done"
                  class="rounded-full border-2 border-ink bg-mint px-3 py-0.5 font-display text-sm font-extrabold"
                  >Live ✅</span
                >
                <span
                  v-else
                  class="rounded-full border-2 border-dashed border-ink px-3 py-0.5 font-display text-sm font-bold text-ink/60"
                  >Coming soon</span
                >
              </div>
              <h3 class="mt-2 font-display text-xl font-extrabold">{{ step.title }}</h3>
              <p class="mt-1 font-semibold text-ink/75">{{ step.desc }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Download -->
    <section id="download" class="mx-auto max-w-5xl px-6 py-24">
      <div
        class="rounded-[2rem] border-4 border-ink bg-grape p-12 text-center text-white shadow-poplg"
      >
        <h2 class="font-display text-4xl font-extrabold md:text-5xl">Get the Console 🎮</h2>
        <p class="mx-auto mt-4 max-w-md text-lg font-semibold text-white/90">
          Install the Console to connect, and the Agent on each store PC. Builds are published per
          release.
        </p>
        <div
          class="mt-8 inline-flex -rotate-1 items-center gap-2 rounded-2xl border-4 border-ink bg-sun px-6 py-3 font-display text-lg font-extrabold text-ink shadow-pop"
        >
          🪟 Windows build — coming with the first release
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t-4 border-ink bg-white">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-semibold text-ink/70 sm:flex-row"
      >
        <span class="flex items-center gap-2">
          <span class="grid h-7 w-7 place-items-center rounded-lg border-2 border-ink bg-sun"
            >🦄</span
          >
          © {{ year }} Arna · Siri ecosystem
        </span>
        <span class="font-display font-bold">self-hosted · private</span>
      </div>
    </footer>
  </main>
</template>

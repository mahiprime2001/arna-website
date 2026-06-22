<script setup lang="ts">
const modules = [
  { name: "Remote", desc: "Full control of any store PC — screen, mouse, keyboard, multi-monitor.", emoji: "🖥️", color: "bg-sky", rotate: "-rotate-2" },
  { name: "Fleet", desc: "Live health of every store — disk, queues, status — and one-click remote fixes.", emoji: "📊", color: "bg-sun", rotate: "rotate-2" },
  { name: "Chat", desc: "Live and persistent messaging, with broadcast to every store at once.", emoji: "💬", color: "bg-mint", rotate: "-rotate-1" },
  { name: "Meet", desc: "Audio and video calls with screen share — built on the same engine.", emoji: "🎥", color: "bg-coral", rotate: "rotate-1" },
  { name: "Files", desc: "Drag-and-drop transfer, peer-to-peer for big files, both directions.", emoji: "📦", color: "bg-grape", rotate: "-rotate-2" },
];

const stats = [
  { n: "1", label: "app to rule them all", emoji: "📱" },
  { n: "5+", label: "tools, one engine", emoji: "🧰" },
  { n: "0", label: "banners & time limits", emoji: "🚫" },
  { n: "∞", label: "stores, your rules", emoji: "🏪" },
];

const steps = [
  { n: "1", title: "Install", desc: "Pop the Agent on each store PC and the Console on yours. Two clicks.", emoji: "📥", color: "bg-sky" },
  { n: "2", title: "Connect", desc: "Click a store, they tap Accept — and you're in. No fuss, no codes to chase.", emoji: "🤝", color: "bg-sun" },
  { n: "3", title: "Control", desc: "Drive the screen, share files, and chat — all end-to-end encrypted.", emoji: "🎮", color: "bg-coral" },
];

const benefits = [
  { title: "Self-hosted", desc: "Runs on your own server. Your data never leaves home.", emoji: "🏠", color: "bg-sun" },
  { title: "End-to-end encrypted", desc: "Screens and files are scrambled the whole way across.", emoji: "🔒", color: "bg-mint" },
  { title: "No fees, no banners", desc: "No per-seat pricing, no nag screens, no time limits. Ever.", emoji: "🎈", color: "bg-coral" },
  { title: "Truly yours", desc: "Your code, your branding, your rules — owned end to end.", emoji: "👑", color: "bg-grape" },
];

const faqs = [
  { q: "Is it really self-hosted?", a: "Yep — the whole thing runs on your own server. Nothing phones home." },
  { q: "Do staff see when I connect?", a: "Always. They get a friendly popup and tap Accept before anything starts." },
  { q: "What about big files?", a: "They zip straight PC-to-PC, peer-to-peer — fast, private, and they skip the server." },
  { q: "Does it work across different stores?", a: "That's the whole point. One Console connects to every store in your network." },
];

const year = new Date().getFullYear();
</script>

<template>
  <main class="min-h-screen overflow-x-hidden font-body">
    <!-- Nav -->
    <header class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div class="flex items-center gap-3">
        <span class="grid h-11 w-11 place-items-center rounded-2xl border-4 border-ink bg-sun text-xl shadow-popsm">🦄</span>
        <span class="font-display text-2xl font-extrabold">Arna</span>
      </div>
      <nav class="flex items-center gap-3">
        <a href="#how" class="hidden rounded-xl border-4 border-ink bg-white px-4 py-2 font-display font-bold shadow-popsm pop md:inline-block">How it works</a>
        <a href="#modules" class="hidden rounded-xl border-4 border-ink bg-white px-4 py-2 font-display font-bold shadow-popsm pop sm:inline-block">Platform</a>
        <a href="#roadmap" class="hidden rounded-xl border-4 border-ink bg-white px-4 py-2 font-display font-bold shadow-popsm pop sm:inline-block">Roadmap</a>
        <a href="#download" class="rounded-xl border-4 border-ink bg-coral px-4 py-2 font-display font-bold text-white shadow-popsm pop">Download</a>
      </nav>
    </header>

    <!-- Hero -->
    <section class="dots relative">
      <span class="animate-floaty absolute left-[7%] top-20 text-5xl" aria-hidden="true">⭐</span>
      <span class="animate-wiggle absolute right-[9%] top-28 text-5xl" style="animation-delay: -1s" aria-hidden="true">☁️</span>
      <span class="animate-floaty absolute bottom-8 left-[13%] text-4xl" style="animation-delay: -2s" aria-hidden="true">✨</span>
      <span class="animate-wiggle absolute bottom-16 right-[14%] text-4xl" style="animation-delay: -0.5s" aria-hidden="true">🎈</span>
      <span class="animate-floaty absolute right-[24%] top-12 text-3xl" style="animation-delay: -3s" aria-hidden="true">🚀</span>

      <div class="mx-auto max-w-5xl px-6 py-24 text-center">
        <p class="mb-6 inline-block -rotate-2 rounded-full border-4 border-ink bg-bubble px-4 py-1.5 font-display text-sm font-bold text-ink shadow-popsm">
          Self-hosted · end-to-end encrypted 🔒
        </p>
        <h1 class="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
          Remote control for your
          <span class="relative whitespace-nowrap">
            <span class="relative z-10 rounded-2xl border-4 border-ink bg-sun px-3 shadow-pop">whole crew</span>
          </span>
          of stores
        </h1>
        <p class="mx-auto mt-8 max-w-xl text-lg font-semibold text-ink/70">
          One friendly app to support, monitor, message, and meet across every store —
          running on your own infrastructure, owned end to end.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#download" class="rounded-2xl border-4 border-ink bg-coral px-7 py-3.5 font-display text-lg font-extrabold text-white shadow-pop pop">Download the app 🎉</a>
          <a href="#modules" class="rounded-2xl border-4 border-ink bg-white px-7 py-3.5 font-display text-lg font-extrabold shadow-pop pop">See the tools</a>
        </div>
      </div>
    </section>

    <!-- Connection illustration -->
    <section class="dots border-y-4 border-ink bg-bubble/30 py-16">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="font-display text-3xl font-extrabold md:text-4xl">
          You ↔ every store, <span class="text-coral">connected</span> 🔌
        </h2>
        <p class="mx-auto mt-3 max-w-md font-semibold text-ink/70">
          Your Console links straight to each store's PC — encrypted, the whole way across.
        </p>

        <svg
          class="mx-auto mt-10 w-full max-w-2xl"
          viewBox="0 0 680 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="A Console computer linked to a Store computer by a red connection line"
        >
          <!-- red link line (behind the computers) -->
          <path d="M240 106 C300 56, 380 56, 440 106" stroke="#FF2E2E" stroke-width="8" stroke-linecap="round" stroke-dasharray="0.5 20" class="dash-flow" />
          <circle cx="240" cy="106" r="9" fill="#FF2E2E" stroke="#15151f" stroke-width="4" />
          <circle cx="440" cy="106" r="9" fill="#FF2E2E" stroke="#15151f" stroke-width="4" />
          <!-- link badge -->
          <circle cx="340" cy="64" r="23" fill="#ffffff" stroke="#15151f" stroke-width="5" />
          <text x="340" y="73" text-anchor="middle" font-size="24">⚡</text>

          <!-- LEFT computer: Console -->
          <rect x="60" y="46" width="180" height="120" rx="18" fill="#5BC0EB" stroke="#15151f" stroke-width="6" />
          <rect x="78" y="62" width="144" height="74" rx="10" fill="#FFF7E8" stroke="#15151f" stroke-width="4" />
          <circle cx="122" cy="92" r="7" fill="#15151f" />
          <circle cx="178" cy="92" r="7" fill="#15151f" />
          <path d="M120 108 q30 22 60 0" stroke="#15151f" stroke-width="4" stroke-linecap="round" fill="none" />
          <rect x="135" y="166" width="30" height="18" fill="#5BC0EB" stroke="#15151f" stroke-width="6" />
          <rect x="104" y="182" width="92" height="16" rx="8" fill="#5BC0EB" stroke="#15151f" stroke-width="6" />
          <text x="150" y="232" text-anchor="middle" class="font-display" font-weight="800" font-size="22" fill="#15151f">CONSOLE</text>

          <!-- RIGHT computer: Store -->
          <rect x="440" y="46" width="180" height="120" rx="18" fill="#FFD23F" stroke="#15151f" stroke-width="6" />
          <rect x="458" y="62" width="144" height="74" rx="10" fill="#FFF7E8" stroke="#15151f" stroke-width="4" />
          <circle cx="502" cy="92" r="7" fill="#15151f" />
          <circle cx="558" cy="92" r="7" fill="#15151f" />
          <path d="M500 108 q30 22 60 0" stroke="#15151f" stroke-width="4" stroke-linecap="round" fill="none" />
          <rect x="515" y="166" width="30" height="18" fill="#FFD23F" stroke="#15151f" stroke-width="6" />
          <rect x="484" y="182" width="92" height="16" rx="8" fill="#FFD23F" stroke="#15151f" stroke-width="6" />
          <text x="530" y="232" text-anchor="middle" class="font-display" font-weight="800" font-size="22" fill="#15151f">STORE</text>
        </svg>
      </div>
    </section>

    <!-- Stats band -->
    <section class="border-y-4 border-ink bg-ink py-12">
      <div class="mx-auto grid max-w-5xl grid-cols-2 gap-5 px-6 md:grid-cols-4">
        <div v-for="(s, i) in stats" :key="s.label" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="rounded-2xl border-4 border-ink bg-cream p-5 text-center shadow-pop">
          <div class="text-3xl">{{ s.emoji }}</div>
          <div class="font-display text-4xl font-extrabold">{{ s.n }}</div>
          <div class="mt-1 text-sm font-bold text-ink/70">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <!-- Modules -->
    <section id="modules" class="dots mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">One app, <span class="text-grape">many tools</span> 🧰</h2>
      <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">
        Every tool runs on the same engine — so it's one happy platform, not five products.
      </p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="m in modules" :key="m.name" :class="[m.color, m.rotate]" class="rounded-3xl border-4 border-ink p-6 shadow-pop pop">
          <div class="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink bg-white text-3xl">{{ m.emoji }}</div>
          <h3 class="font-display text-2xl font-extrabold">{{ m.name }}</h3>
          <p class="mt-2 font-semibold leading-relaxed text-ink/80">{{ m.desc }}</p>
        </div>
        <div class="grid place-items-center rounded-3xl border-4 border-dashed border-ink bg-white p-6 text-center">
          <p class="font-display text-xl font-extrabold text-ink/70">More tools,<br />same foundation 🌱</p>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section id="how" class="border-y-4 border-ink bg-sky/30 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">Up and running in <span class="text-coral">3 steps</span> 🪄</h2>
        <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">No manuals, no headaches. If you can click Accept, you can use Arna.</p>
        <div class="grid gap-6 md:grid-cols-3">
          <div v-for="(step, i) in steps" :key="step.title" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="rounded-3xl border-4 border-ink bg-white p-7 shadow-pop pop">
            <div class="flex items-center gap-3">
              <span :class="step.color" class="grid h-12 w-12 place-items-center rounded-2xl border-4 border-ink font-display text-2xl font-extrabold shadow-popsm">{{ step.n }}</span>
              <span class="text-4xl">{{ step.emoji }}</span>
            </div>
            <h3 class="mt-4 font-display text-2xl font-extrabold">{{ step.title }}</h3>
            <p class="mt-2 font-semibold text-ink/80">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Arna -->
    <section class="dots mx-auto max-w-6xl px-6 py-20">
      <div class="relative">
        <span class="animate-wiggle absolute -top-6 right-2 text-4xl" aria-hidden="true">💖</span>
      </div>
      <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">Why folks <span class="text-grape">love</span> Arna 🥰</h2>
      <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">All the power of the big remote tools — none of the fees, banners, or strings attached.</p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(b, i) in benefits" :key="b.title" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="rounded-3xl border-4 border-ink bg-white p-6 shadow-pop pop">
          <div :class="b.color" class="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink text-3xl shadow-popsm">{{ b.emoji }}</div>
          <h3 class="font-display text-xl font-extrabold">{{ b.title }}</h3>
          <p class="mt-2 font-semibold text-ink/75">{{ b.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section id="roadmap" class="dots border-y-4 border-ink bg-white/40 py-20">
      <div class="mx-auto max-w-4xl px-6">
        <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">The <span class="text-coral">adventure</span> ahead 🗺️</h2>
        <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">We ship it tool by tool — here's what's landed and what's coming next.</p>
        <ol class="relative space-y-6">
          <li v-for="(step, i) in [
              { phase: 'Now', title: 'Remote control + Fleet health', desc: 'Take over any store PC, and watch every store\'s health from one dashboard.', emoji: '🚀', color: 'bg-sun', done: true },
              { phase: 'Next', title: 'Files + Chat', desc: 'Drag-and-drop file sharing and live messaging on the same connection.', emoji: '💬', color: 'bg-mint', done: false },
              { phase: 'Soon', title: 'Meet — calls & screen share', desc: 'Teams-style audio/video meetings with screen share, built right in.', emoji: '🎥', color: 'bg-coral', done: false },
              { phase: 'Later', title: 'Broadcast, recording & roles', desc: 'Announce to all stores, record sessions, and fine-grained access + audit.', emoji: '🌟', color: 'bg-grape', done: false },
            ]" :key="step.title" class="flex items-stretch gap-4 sm:gap-6">
            <div class="flex flex-col items-center">
              <span :class="step.color" class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-4 border-ink text-2xl shadow-popsm">{{ step.emoji }}</span>
              <span v-if="i < 3" class="my-1 w-1 flex-1 rounded-full bg-ink/20" />
            </div>
            <div class="mb-2 flex-1 rounded-2xl border-4 border-ink bg-white p-5 shadow-pop">
              <div class="flex flex-wrap items-center gap-2">
                <span :class="step.color" class="rounded-full border-2 border-ink px-3 py-0.5 font-display text-sm font-extrabold">{{ step.phase }}</span>
                <span v-if="step.done" class="rounded-full border-2 border-ink bg-mint px-3 py-0.5 font-display text-sm font-extrabold">Live ✅</span>
                <span v-else class="rounded-full border-2 border-dashed border-ink px-3 py-0.5 font-display text-sm font-bold text-ink/60">Coming soon</span>
              </div>
              <h3 class="mt-2 font-display text-xl font-extrabold">{{ step.title }}</h3>
              <p class="mt-1 font-semibold text-ink/75">{{ step.desc }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-3xl px-6 py-20">
      <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">Quick <span class="text-sky">questions</span> 🤔</h2>
      <div class="mt-12 space-y-4">
        <details v-for="f in faqs" :key="f.q" class="group rounded-2xl border-4 border-ink bg-white p-5 shadow-popsm">
          <summary class="flex cursor-pointer list-none items-center justify-between font-display text-lg font-extrabold">
            {{ f.q }}
            <span class="grid h-8 w-8 place-items-center rounded-lg border-2 border-ink bg-sun transition group-open:rotate-45">+</span>
          </summary>
          <p class="mt-3 font-semibold text-ink/75">{{ f.a }}</p>
        </details>
      </div>
    </section>

    <!-- Download -->
    <section id="download" class="mx-auto max-w-5xl px-6 py-20">
      <div class="relative rounded-[2rem] border-4 border-ink bg-grape p-12 text-center text-white shadow-poplg">
        <span class="animate-floaty absolute -left-4 -top-5 text-5xl" aria-hidden="true">🎁</span>
        <span class="animate-wiggle absolute -right-3 -top-4 text-5xl" aria-hidden="true">🌟</span>
        <h2 class="font-display text-4xl font-extrabold md:text-5xl">Get the Console 🎮</h2>
        <p class="mx-auto mt-4 max-w-md text-lg font-semibold text-white/90">
          Install the Console to connect, and the Agent on each store PC. Builds are published per release.
        </p>
        <div class="mt-8 inline-flex -rotate-1 items-center gap-2 rounded-2xl border-4 border-ink bg-sun px-6 py-3 font-display text-lg font-extrabold text-ink shadow-pop">
          🪟 Windows build — coming with the first release
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t-4 border-ink bg-white">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-semibold text-ink/70 sm:flex-row">
        <span class="flex items-center gap-2">
          <span class="grid h-7 w-7 place-items-center rounded-lg border-2 border-ink bg-sun">🦄</span>
          © {{ year }} Arna · Siri ecosystem
        </span>
        <a href="https://ifleon.com" target="_blank" rel="noopener" class="inline-flex -rotate-1 items-center gap-2 rounded-full border-4 border-ink bg-mint px-4 py-1.5 font-display font-extrabold text-ink shadow-popsm pop">
          ⚡ Powered by ifleon
        </a>
        <span class="font-display font-bold">self-hosted · private</span>
      </div>
    </footer>
  </main>
</template>

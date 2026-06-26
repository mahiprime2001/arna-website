<script setup lang="ts">
import AppPreview from "../components/AppPreview.vue";

const useCases = [
  { who: "You & family", emoji: "👋", color: "bg-sun", desc: "Fix a parent's laptop from across the country — or hop onto your own PC while you're out." },
  { who: "Freelancers & IT", emoji: "🧰", color: "bg-sky", desc: "Support clients on demand: see their screen, fix it, send the files — all in one app." },
  { who: "Small teams", emoji: "🤝", color: "bg-mint", desc: "Help teammates, share files, and chat — no per-seat fees, no codes to chase." },
  { who: "Whole fleets", emoji: "🏢", color: "bg-coral", desc: "Run remote support across every machine you manage — hosted or on your own server." },
];

const modules = [
  { name: "Remote control", desc: "See and drive any computer — live screen, mouse, keyboard. Smooth H.264 video.", emoji: "🖥️", color: "bg-sky", rotate: "-rotate-2", live: true },
  { name: "Ask first", desc: "The other PC shows an Accept/Decline popup with a one-time code before anyone connects.", emoji: "🛡️", color: "bg-sun", rotate: "rotate-2", live: true },
  { name: "Files both ways", desc: "Drag a file to send it over, or pull one back. Straight PC-to-PC, both directions.", emoji: "📦", color: "bg-grape", rotate: "-rotate-1", live: true },
  { name: "Live chat", desc: "Message the person at the other machine right inside the session.", emoji: "💬", color: "bg-mint", rotate: "rotate-1", live: true },
  { name: "Fleet", desc: "See the health of every device — disk, status — and run one-click fixes.", emoji: "📊", color: "bg-coral", rotate: "-rotate-2", live: false },
  { name: "Meet & SSH", desc: "Calls with screen share, plus a terminal into your servers — same engine.", emoji: "🎥", color: "bg-bubble", rotate: "rotate-1", live: false },
];

const stats = [
  { n: "2 ways", label: "hosted, or your own server", emoji: "☁️" },
  { n: "0", label: "banners & time limits", emoji: "🚫" },
  { n: "100%", label: "open source", emoji: "🔓" },
  { n: "∞", label: "devices, your rules", emoji: "💻" },
];

const ways = [
  {
    tag: "For everyone",
    title: "Use it hosted",
    desc: "Sign up and connect — no servers to set up, nothing to configure. The fastest way to help a friend or reach your own PC.",
    emoji: "☁️",
    color: "bg-sky",
    cta: "Get started",
    to: "/download",
  },
  {
    tag: "For developers",
    title: "Run your own server",
    desc: "It's open source. Spin up the backend on your own box and point the apps at it — your data never leaves home.",
    emoji: "🏠",
    color: "bg-sun",
    cta: "Self-host guide",
    to: "/self-host",
  },
];

const steps = [
  { n: "1", title: "Get the apps", desc: "Install the Console on your machine, and the Agent on the one you want to reach.", emoji: "📥", color: "bg-sky" },
  { n: "2", title: "Connect", desc: "Click the device, they tap Accept — and you're in. No codes to chase.", emoji: "🤝", color: "bg-sun" },
  { n: "3", title: "Do the thing", desc: "Drive the screen, send files both ways, and chat — all end-to-end encrypted.", emoji: "🎮", color: "bg-coral" },
];

const benefits = [
  { title: "Open source", desc: "The whole stack is open. Read it, fork it, trust it — no black boxes.", emoji: "🔓", color: "bg-mint" },
  { title: "Hosted or self-hosted", desc: "Sign up and go, or run it on your own server. Your call.", emoji: "🏠", color: "bg-sun" },
  { title: "End-to-end encrypted", desc: "Screens and files are scrambled the whole way across. The server never sees them.", emoji: "🔒", color: "bg-sky" },
  { title: "For everyone", desc: "Help a friend, reach your own PC, or run a whole fleet — same friendly app.", emoji: "💛", color: "bg-coral" },
];

const faqs = [
  { q: "Do I need to set up a server?", a: "Nope — use the hosted version and just sign up. If you'd rather run your own, it's open source and self-hostable in a few commands." },
  { q: "Is it really open source?", a: "Yes — the apps, the backend, all of it. Take it, read it, run it your way." },
  { q: "Does the other person see when I connect?", a: "Always. They get a friendly popup with a one-time code and tap Accept before anything starts." },
  { q: "Can I send and receive files?", a: "Both ways — drag a file to push it to the remote PC, or click Download to pull one back. Peer-to-peer, so big files skip the server." },
  { q: "Is it private?", a: "Screens and files are end-to-end encrypted. On your own server, nothing ever leaves your network." },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="dots relative">
      <span class="animate-floaty absolute left-[7%] top-16 text-5xl" aria-hidden="true">⭐</span>
      <span class="animate-wiggle absolute right-[9%] top-24 text-5xl" style="animation-delay: -1s" aria-hidden="true">☁️</span>
      <span class="animate-floaty absolute bottom-8 left-[13%] text-4xl" style="animation-delay: -2s" aria-hidden="true">✨</span>
      <span class="animate-wiggle absolute bottom-16 right-[14%] text-4xl" style="animation-delay: -0.5s" aria-hidden="true">🎈</span>

      <div class="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <p class="mb-6 inline-block -rotate-2 rounded-full border-4 border-ink bg-bubble px-4 py-1.5 font-display text-sm font-bold text-ink shadow-popsm">
          Open source · end-to-end encrypted 🔒
        </p>
        <h1 class="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
          Remote control for
          <span class="relative whitespace-nowrap">
            <span class="relative z-10 rounded-2xl border-4 border-ink bg-sun px-3 shadow-pop">any device</span>
          </span>
          , anywhere
        </h1>
        <p class="mx-auto mt-8 max-w-xl text-lg font-semibold text-ink/70">
          A friendly app to see, control, share files, and chat across any computer — for one
          friend or a whole fleet. Use it <b>hosted</b>, or run it on <b>your own server</b>.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <RouterLink to="/download" class="rounded-2xl border-4 border-ink bg-coral px-7 py-3.5 font-display text-lg font-extrabold text-white shadow-pop pop">
            Get started — free 🎉
          </RouterLink>
          <RouterLink to="/features" class="rounded-2xl border-4 border-ink bg-white px-7 py-3.5 font-display text-lg font-extrabold shadow-pop pop">
            See what it does
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- App preview -->
    <section class="mx-auto -mt-4 max-w-4xl px-6 pb-16">
      <AppPreview />
      <p class="mt-6 text-center font-display text-lg font-bold text-ink/60">
        See the screen, drive it, swap files, and chat — all in one window. 👆
      </p>
    </section>

    <!-- Connection illustration -->
    <section class="dots border-y-4 border-ink bg-bubble/30 py-16">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="font-display text-3xl font-extrabold md:text-4xl">
          You ↔ any device, <span class="text-coral">connected</span> 🔌
        </h2>
        <p class="mx-auto mt-3 max-w-md font-semibold text-ink/70">
          Your Console links straight to any computer — encrypted, the whole way across.
        </p>

        <svg class="mx-auto mt-10 w-full max-w-2xl" viewBox="0 0 680 270" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A Console computer linked to any other computer by a red connection line">
          <path d="M240 106 C300 56, 380 56, 440 106" stroke="#FF2E2E" stroke-width="8" stroke-linecap="round" stroke-dasharray="0.5 20" class="dash-flow" />
          <circle cx="240" cy="106" r="9" fill="#FF2E2E" stroke="#15151f" stroke-width="4" />
          <circle cx="440" cy="106" r="9" fill="#FF2E2E" stroke="#15151f" stroke-width="4" />
          <circle cx="340" cy="64" r="23" fill="#ffffff" stroke="#15151f" stroke-width="5" />
          <text x="340" y="73" text-anchor="middle" font-size="24">⚡</text>
          <rect x="60" y="46" width="180" height="120" rx="18" fill="#5BC0EB" stroke="#15151f" stroke-width="6" />
          <rect x="78" y="62" width="144" height="74" rx="10" fill="#FFF7E8" stroke="#15151f" stroke-width="4" />
          <circle cx="122" cy="92" r="7" fill="#15151f" /><circle cx="178" cy="92" r="7" fill="#15151f" />
          <path d="M120 108 q30 22 60 0" stroke="#15151f" stroke-width="4" stroke-linecap="round" fill="none" />
          <rect x="135" y="166" width="30" height="18" fill="#5BC0EB" stroke="#15151f" stroke-width="6" />
          <rect x="104" y="182" width="92" height="16" rx="8" fill="#5BC0EB" stroke="#15151f" stroke-width="6" />
          <text x="150" y="232" text-anchor="middle" class="font-display" font-weight="800" font-size="22" fill="#15151f">CONSOLE</text>
          <rect x="440" y="46" width="180" height="120" rx="18" fill="#FFD23F" stroke="#15151f" stroke-width="6" />
          <rect x="458" y="62" width="144" height="74" rx="10" fill="#FFF7E8" stroke="#15151f" stroke-width="4" />
          <circle cx="502" cy="92" r="7" fill="#15151f" /><circle cx="558" cy="92" r="7" fill="#15151f" />
          <path d="M500 108 q30 22 60 0" stroke="#15151f" stroke-width="4" stroke-linecap="round" fill="none" />
          <rect x="515" y="166" width="30" height="18" fill="#FFD23F" stroke="#15151f" stroke-width="6" />
          <rect x="484" y="182" width="92" height="16" rx="8" fill="#FFD23F" stroke="#15151f" stroke-width="6" />
          <text x="530" y="232" text-anchor="middle" class="font-display" font-weight="800" font-size="22" fill="#15151f">ANY PC</text>
        </svg>
      </div>
    </section>

    <!-- Two ways to use it -->
    <section class="mx-auto max-w-5xl px-6 py-20">
      <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">Two ways to use it 🎈</h2>
      <p class="mx-auto mb-12 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">
        Same app, your choice — the easy hosted way, or fully on your own server.
      </p>
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="(w, i) in ways" :key="w.title" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="flex flex-col rounded-3xl border-4 border-ink bg-white p-7 shadow-pop">
          <div class="flex items-center gap-3">
            <span :class="w.color" class="grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink text-3xl shadow-popsm">{{ w.emoji }}</span>
            <span class="rounded-full border-2 border-ink px-3 py-0.5 font-display text-sm font-extrabold">{{ w.tag }}</span>
          </div>
          <h3 class="mt-4 font-display text-2xl font-extrabold">{{ w.title }}</h3>
          <p class="mt-2 flex-1 font-semibold text-ink/75">{{ w.desc }}</p>
          <RouterLink :to="w.to" class="mt-5 inline-block self-start rounded-xl border-4 border-ink bg-sun px-5 py-2.5 font-display font-extrabold shadow-popsm pop">
            {{ w.cta }} →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Made for everyone -->
    <section class="dots border-t-4 border-ink bg-sun/20 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">Made for <span class="text-coral">everyone</span> 💛</h2>
        <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">
          One friend or ten thousand machines — same friendly app, same engine.
        </p>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(u, i) in useCases" :key="u.who" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="rounded-3xl border-4 border-ink bg-white p-6 shadow-pop pop">
            <div :class="u.color" class="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink text-3xl shadow-popsm">{{ u.emoji }}</div>
            <h3 class="font-display text-xl font-extrabold">{{ u.who }}</h3>
            <p class="mt-2 font-semibold text-ink/75">{{ u.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats band -->
    <section class="border-y-4 border-ink bg-ink py-12">
      <div class="mx-auto grid max-w-5xl grid-cols-2 gap-5 px-6 md:grid-cols-4">
        <div v-for="(s, i) in stats" :key="s.label" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="rounded-2xl border-4 border-ink bg-cream p-5 text-center shadow-pop">
          <div class="text-3xl">{{ s.emoji }}</div>
          <div class="font-display text-3xl font-extrabold">{{ s.n }}</div>
          <div class="mt-1 text-sm font-bold text-ink/70">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <!-- Modules -->
    <section class="dots mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">One app, <span class="text-grape">many tools</span> 🧰</h2>
      <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">
        Every tool runs on the same engine — one happy platform, not five products.
      </p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="m in modules" :key="m.name" :class="[m.color, m.rotate]" class="relative rounded-3xl border-4 border-ink p-6 shadow-pop pop">
          <span
            class="absolute right-4 top-4 rounded-full border-2 border-ink px-2.5 py-0.5 font-display text-xs font-extrabold"
            :class="m.live ? 'bg-mint' : 'bg-white text-ink/60'"
          >
            {{ m.live ? "Live ✅" : "Soon" }}
          </span>
          <div class="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink bg-white text-3xl">{{ m.emoji }}</div>
          <h3 class="font-display text-2xl font-extrabold">{{ m.name }}</h3>
          <p class="mt-2 font-semibold leading-relaxed text-ink/80">{{ m.desc }}</p>
        </div>
      </div>
      <div class="mt-8 text-center">
        <RouterLink to="/features" class="inline-block rounded-2xl border-4 border-ink bg-white px-6 py-3 font-display font-extrabold shadow-pop pop">
          Explore every feature →
        </RouterLink>
      </div>
    </section>

    <!-- How it works -->
    <section class="border-y-4 border-ink bg-sky/30 py-20">
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
      <h2 class="text-center font-display text-4xl font-extrabold md:text-5xl">Why folks <span class="text-grape">love</span> Arna 🥰</h2>
      <p class="mx-auto mb-14 mt-4 max-w-xl text-center text-lg font-semibold text-ink/70">All the power of the big remote tools — none of the fees, banners, or lock-in.</p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(b, i) in benefits" :key="b.title" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="rounded-3xl border-4 border-ink bg-white p-6 shadow-pop pop">
          <div :class="b.color" class="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink text-3xl shadow-popsm">{{ b.emoji }}</div>
          <h3 class="font-display text-xl font-extrabold">{{ b.title }}</h3>
          <p class="mt-2 font-semibold text-ink/75">{{ b.desc }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="border-t-4 border-ink bg-white/40">
      <div class="mx-auto max-w-3xl px-6 py-20">
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
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-5xl px-6 py-20">
      <div class="relative rounded-[2rem] border-4 border-ink bg-grape p-12 text-center text-white shadow-poplg">
        <span class="animate-floaty absolute -left-4 -top-5 text-5xl" aria-hidden="true">🎁</span>
        <span class="animate-wiggle absolute -right-3 -top-4 text-5xl" aria-hidden="true">🌟</span>
        <h2 class="font-display text-4xl font-extrabold md:text-5xl">Ready to connect? 🎮</h2>
        <p class="mx-auto mt-4 max-w-md text-lg font-semibold text-white/90">
          Grab the apps and you're one Accept away from the other screen.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink to="/download" class="rounded-2xl border-4 border-ink bg-sun px-7 py-3.5 font-display text-lg font-extrabold text-ink shadow-pop pop">
            Get started 🚀
          </RouterLink>
          <RouterLink to="/self-host" class="rounded-2xl border-4 border-ink bg-white px-7 py-3.5 font-display text-lg font-extrabold text-ink shadow-pop pop">
            Or self-host it
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

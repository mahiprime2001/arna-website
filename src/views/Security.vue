<script setup lang="ts">
const pillars = [
  { emoji: "🛡️", color: "bg-sun", title: "Always ask first", desc: "No silent connections. The other PC shows an Accept/Decline popup with a one-time code, and can end the session whenever they like." },
  { emoji: "🔒", color: "bg-mint", title: "End-to-end encrypted", desc: "Screens, files, and chat are encrypted (DTLS-SRTP) the whole way across. Only the two machines can read them." },
  { emoji: "🔌", color: "bg-sky", title: "Direct, peer-to-peer", desc: "Content flows straight between the two PCs. The server just helps them find each other — it's not in the middle of your data." },
  { emoji: "🏠", color: "bg-coral", title: "Self-host = nothing leaves", desc: "Run it on your own server and your sessions never touch anyone else's infrastructure. Your network, your rules." },
  { emoji: "🔓", color: "bg-grape", title: "Open source", desc: "Every line is public. Don't take our word for it — read exactly how it works, or have your team audit it." },
  { emoji: "🚫", color: "bg-bubble", title: "No tracking, no banners", desc: "No nag screens, no per-seat surveillance, no selling your data. It's a tool, not a funnel." },
];
</script>

<template>
  <div>
    <section class="dots px-6 py-16 text-center">
      <p class="mb-5 inline-block -rotate-2 rounded-full border-4 border-ink bg-mint px-4 py-1.5 font-display text-sm font-bold shadow-popsm">Security &amp; privacy</p>
      <h1 class="font-display text-5xl font-extrabold md:text-6xl">Private by design 🔒</h1>
      <p class="mx-auto mt-5 max-w-xl text-lg font-semibold text-ink/70">
        Remote access is sensitive. So Arna is built so that you stay in control and your screen
        stays yours — by default.
      </p>
    </section>

    <!-- Pillars -->
    <section class="mx-auto max-w-6xl px-6 pb-8">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(p, i) in pillars" :key="p.title" :class="i % 2 ? 'rotate-1' : '-rotate-1'" class="rounded-3xl border-4 border-ink bg-white p-6 shadow-pop pop">
          <div :class="p.color" class="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink text-3xl shadow-popsm">{{ p.emoji }}</div>
          <h3 class="font-display text-xl font-extrabold">{{ p.title }}</h3>
          <p class="mt-2 font-semibold text-ink/75">{{ p.desc }}</p>
        </div>
      </div>
    </section>

    <!-- What the server sees -->
    <section class="dots border-y-4 border-ink bg-sky/20 py-16">
      <div class="mx-auto max-w-4xl px-6">
        <h2 class="text-center font-display text-3xl font-extrabold md:text-4xl">What the server can &amp; can't see 👀</h2>
        <p class="mx-auto mb-10 mt-3 max-w-md text-center font-semibold text-ink/70">The server is a matchmaker — that's it.</p>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border-4 border-ink bg-white p-7 shadow-pop">
            <h3 class="flex items-center gap-2 font-display text-xl font-extrabold"><span class="grid h-8 w-8 place-items-center rounded-lg border-2 border-ink bg-mint">✓</span> It helps with</h3>
            <ul class="mt-4 space-y-2 font-semibold text-ink/80">
              <li>• Knowing which devices are online</li>
              <li>• Introducing two PCs that want to connect</li>
              <li>• Passing the "let's connect" handshake along</li>
            </ul>
          </div>
          <div class="rounded-3xl border-4 border-ink bg-white p-7 shadow-pop">
            <h3 class="flex items-center gap-2 font-display text-xl font-extrabold"><span class="grid h-8 w-8 place-items-center rounded-lg border-2 border-ink bg-coral text-white">✕</span> It never sees</h3>
            <ul class="mt-4 space-y-2 font-semibold text-ink/80">
              <li>• Your screen or what's on it</li>
              <li>• The files you send or receive</li>
              <li>• Your chat messages</li>
            </ul>
          </div>
        </div>
        <p class="mx-auto mt-8 max-w-lg text-center font-semibold text-ink/60">
          Even when a tricky network forces traffic through the relay, it's still encrypted end-to-end —
          the relay just forwards scrambled bytes.
        </p>
      </div>
    </section>

    <section class="px-6 py-16 text-center">
      <a href="https://github.com/mahiprime2001/arna/blob/main/docs/PROTOCOL.md" target="_blank" rel="noopener" class="inline-block rounded-2xl border-4 border-ink bg-coral px-8 py-4 font-display text-lg font-extrabold text-white shadow-pop pop">
        Read exactly how it works →
      </a>
    </section>
  </div>
</template>

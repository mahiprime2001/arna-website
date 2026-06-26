<script setup lang="ts">
const plans = [
  {
    name: "Personal",
    price: "Free",
    sub: "hosted · for everyone",
    color: "bg-sky",
    rotate: "-rotate-1",
    cta: "Get started",
    to: "/download",
    featured: false,
    perks: ["Connect to & from your devices", "Smooth remote control + video", "Files both ways + live chat", "Always-ask consent popup", "End-to-end encrypted"],
  },
  {
    name: "Team",
    price: "Coming soon",
    sub: "hosted · for groups & businesses",
    color: "bg-sun",
    rotate: "rotate-1",
    cta: "Notify me",
    to: "/download",
    featured: true,
    perks: ["Everything in Personal", "Multiple admins & devices", "Fleet health dashboard", "Roles & session audit log", "Priority relay & support"],
  },
  {
    name: "Self-host",
    price: "Free",
    sub: "open source · your server",
    color: "bg-mint",
    rotate: "-rotate-1",
    cta: "Self-host guide",
    to: "/self-host",
    featured: false,
    perks: ["Run the whole stack yourself", "Every feature, no limits", "Your data never leaves home", "No accounts, no fees, ever", "Fork it, brand it, own it"],
  },
];
</script>

<template>
  <div>
    <section class="dots px-6 py-16 text-center">
      <p class="mb-5 inline-block -rotate-2 rounded-full border-4 border-ink bg-mint px-4 py-1.5 font-display text-sm font-bold shadow-popsm">No banners, no lock-in</p>
      <h1 class="font-display text-5xl font-extrabold md:text-6xl">Simple pricing 🎈</h1>
      <p class="mx-auto mt-5 max-w-xl text-lg font-semibold text-ink/70">
        Free for personal use, hosted or self-hosted. Pay only when you need team superpowers.
      </p>
    </section>

    <section class="mx-auto max-w-6xl px-6 pb-12">
      <div class="grid items-start gap-6 lg:grid-cols-3">
        <div
          v-for="p in plans"
          :key="p.name"
          :class="[p.rotate, p.featured ? 'bg-ink text-cream' : 'bg-white']"
          class="relative flex flex-col rounded-3xl border-4 border-ink p-7 shadow-pop pop"
        >
          <span v-if="p.featured" class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border-4 border-ink bg-coral px-4 py-1 font-display text-sm font-extrabold text-white shadow-popsm">
            Most powerful
          </span>
          <span :class="p.color" class="grid h-14 w-14 place-items-center rounded-2xl border-4 border-ink text-2xl shadow-popsm">⭐</span>
          <h2 class="mt-4 font-display text-2xl font-extrabold">{{ p.name }}</h2>
          <p class="font-bold" :class="p.featured ? 'text-cream/60' : 'text-ink/55'">{{ p.sub }}</p>
          <div class="mt-4 font-display text-4xl font-extrabold">{{ p.price }}</div>
          <ul class="mt-5 flex-1 space-y-2.5">
            <li v-for="perk in p.perks" :key="perk" class="flex items-start gap-2 font-semibold" :class="p.featured ? 'text-cream/90' : 'text-ink/80'">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink bg-mint text-xs text-ink">✓</span>{{ perk }}
            </li>
          </ul>
          <RouterLink
            :to="p.to"
            class="mt-7 rounded-xl border-4 border-ink px-5 py-3 text-center font-display font-extrabold shadow-popsm pop"
            :class="p.featured ? 'bg-sun text-ink' : 'bg-coral text-white'"
          >
            {{ p.cta }} →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Enterprise note -->
    <section class="mx-auto max-w-4xl px-6 pb-20">
      <div class="flex flex-col items-center gap-5 rounded-3xl border-4 border-dashed border-ink bg-white p-8 text-center sm:flex-row sm:text-left">
        <span class="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-4 border-ink bg-grape text-3xl shadow-popsm">🏢</span>
        <div class="flex-1">
          <h3 class="font-display text-2xl font-extrabold">Running a whole fleet?</h3>
          <p class="mt-1 font-semibold text-ink/70">
            An Enterprise edition with central deployment, SSO, roles, and audit is on the roadmap —
            on the same open-source core. Want in early? Star the repo and say hi.
          </p>
        </div>
        <a href="https://github.com/mahiprime2001/arna" target="_blank" rel="noopener" class="rounded-xl border-4 border-ink bg-sun px-5 py-3 font-display font-extrabold shadow-popsm pop">
          GitHub ★
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const GITHUB = "https://github.com/mahiprime2001/arna";
const year = new Date().getFullYear();

const cols = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/pricing", label: "Pricing" },
      { to: "/download", label: "Get started" },
    ],
  },
  {
    title: "Developers",
    links: [
      { to: "/self-host", label: "Self-host" },
      { href: GITHUB, label: "Source on GitHub" },
      { href: GITHUB + "/blob/main/docs/PROTOCOL.md", label: "Protocol docs" },
    ],
  },
];
</script>

<template>
  <footer class="border-t-4 border-ink bg-white">
    <div class="mx-auto max-w-6xl px-6 py-12">
      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div class="md:col-span-2">
          <div class="flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-xl border-4 border-ink bg-sun text-lg shadow-popsm">🦄</span>
            <span class="font-display text-xl font-extrabold">Arna</span>
          </div>
          <p class="mt-3 max-w-xs font-semibold text-ink/70">
            Open-source remote control for any device. Use it hosted, or run it on your own server.
          </p>
          <span class="mt-4 inline-flex -rotate-1 items-center gap-2 rounded-full border-4 border-ink bg-mint px-3 py-1 font-display text-sm font-extrabold text-ink shadow-popsm">
            🔓 Open source
          </span>
        </div>

        <div v-for="c in cols" :key="c.title">
          <h4 class="font-display text-sm font-extrabold uppercase tracking-wide text-ink/50">{{ c.title }}</h4>
          <ul class="mt-3 space-y-2 font-bold text-ink/75">
            <li v-for="l in c.links" :key="l.label">
              <RouterLink v-if="l.to" :to="l.to" class="hover:text-coral">{{ l.label }}</RouterLink>
              <a v-else :href="l.href" target="_blank" rel="noopener" class="hover:text-coral">{{ l.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t-4 border-ink/10 pt-6 font-semibold text-ink/60 sm:flex-row">
        <span>© {{ year }} Arna · self-hosted &amp; open source</span>
        <a
          href="https://ifleon.com"
          target="_blank"
          rel="noopener"
          class="inline-flex -rotate-1 items-center gap-2 rounded-full border-4 border-ink bg-mint px-4 py-1.5 font-display font-extrabold text-ink shadow-popsm pop"
        >
          ⚡ Powered by ifleon
        </a>
      </div>
    </div>
  </footer>
</template>

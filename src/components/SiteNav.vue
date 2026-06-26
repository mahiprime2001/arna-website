<script setup lang="ts">
import { ref } from "vue";

const GITHUB = "https://github.com/mahiprime2001/arna";
const open = ref(false);

const links = [
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/self-host", label: "Self-host" },
];
</script>

<template>
  <header class="sticky top-0 z-50 border-b-4 border-ink bg-cream/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
      <RouterLink to="/" class="flex items-center gap-3" @click="open = false">
        <span class="grid h-11 w-11 place-items-center rounded-2xl border-4 border-ink bg-sun text-xl shadow-popsm">🦄</span>
        <span class="font-display text-2xl font-extrabold">Arna</span>
      </RouterLink>

      <nav class="hidden items-center gap-2 md:flex">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="rounded-xl border-4 border-ink bg-white px-4 py-2 font-display font-bold shadow-popsm pop"
          active-class="bg-sun"
        >
          {{ l.label }}
        </RouterLink>
        <a
          :href="GITHUB"
          target="_blank"
          rel="noopener"
          class="rounded-xl border-4 border-ink bg-white px-4 py-2 font-display font-bold shadow-popsm pop"
        >
          GitHub ★
        </a>
        <RouterLink
          to="/download"
          class="rounded-xl border-4 border-ink bg-coral px-4 py-2 font-display font-bold text-white shadow-popsm pop"
        >
          Get started
        </RouterLink>
      </nav>

      <button
        class="grid h-11 w-11 place-items-center rounded-xl border-4 border-ink bg-white text-2xl shadow-popsm md:hidden"
        aria-label="Menu"
        @click="open = !open"
      >
        {{ open ? "✕" : "☰" }}
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="border-t-4 border-ink bg-cream px-6 py-4 md:hidden">
      <div class="flex flex-col gap-3">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="rounded-xl border-4 border-ink bg-white px-4 py-2.5 font-display font-bold shadow-popsm"
          active-class="bg-sun"
          @click="open = false"
        >
          {{ l.label }}
        </RouterLink>
        <a :href="GITHUB" target="_blank" rel="noopener" class="rounded-xl border-4 border-ink bg-white px-4 py-2.5 font-display font-bold shadow-popsm">
          GitHub ★
        </a>
        <RouterLink
          to="/download"
          class="rounded-xl border-4 border-ink bg-coral px-4 py-2.5 text-center font-display font-bold text-white shadow-popsm"
          @click="open = false"
        >
          Get started
        </RouterLink>
      </div>
    </div>
  </header>
</template>

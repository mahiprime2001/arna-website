<script setup lang="ts">
// A cartoon mock-up of the Arna Console — purely decorative, but it shows what
// the app actually looks like: a live remote screen, the toolbar, and chat.
</script>

<template>
  <div class="rotate-1 overflow-hidden rounded-3xl border-4 border-ink bg-white shadow-poplg">
    <!-- Title bar -->
    <div class="flex items-center gap-3 border-b-4 border-ink bg-sky px-4 py-2.5">
      <div class="flex gap-1.5">
        <span class="h-3.5 w-3.5 rounded-full border-2 border-ink bg-coral" />
        <span class="h-3.5 w-3.5 rounded-full border-2 border-ink bg-sun" />
        <span class="h-3.5 w-3.5 rounded-full border-2 border-ink bg-mint" />
      </div>
      <span class="font-display text-sm font-extrabold">Arna Console</span>
      <span class="ml-auto flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-2.5 py-0.5 font-display text-xs font-extrabold">
        <span class="h-2 w-2 animate-pulse rounded-full bg-coral" /> LIVE
      </span>
    </div>

    <!-- Body: remote screen + chat -->
    <div class="flex bg-cream">
      <!-- Remote screen (a tiny fake desktop) -->
      <div class="relative flex-1 p-3">
        <div class="relative h-44 overflow-hidden rounded-xl border-4 border-ink bg-grape/80 sm:h-56">
          <!-- wallpaper blobs -->
          <span class="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sun/40" />
          <span class="absolute right-6 top-8 h-16 w-16 rounded-full bg-mint/40" />
          <!-- desktop icons -->
          <div class="absolute left-3 top-3 flex flex-col gap-2">
            <span class="h-7 w-7 rounded-lg border-2 border-ink bg-coral" />
            <span class="h-7 w-7 rounded-lg border-2 border-ink bg-sky" />
          </div>
          <!-- a window -->
          <div class="absolute left-1/2 top-6 w-40 -translate-x-1/2 rounded-lg border-2 border-ink bg-white">
            <div class="flex items-center gap-1 border-b-2 border-ink bg-sun px-1.5 py-1">
              <span class="h-1.5 w-1.5 rounded-full bg-ink" />
              <span class="h-1.5 w-1.5 rounded-full bg-ink" />
            </div>
            <div class="space-y-1 p-2">
              <span class="block h-1.5 w-full rounded bg-ink/20" />
              <span class="block h-1.5 w-3/4 rounded bg-ink/20" />
              <span class="block h-1.5 w-5/6 rounded bg-ink/20" />
            </div>
          </div>
          <!-- taskbar -->
          <div class="absolute inset-x-0 bottom-0 flex items-center gap-1.5 border-t-2 border-ink bg-ink/80 px-2 py-1.5">
            <span class="h-3 w-3 rounded bg-mint" />
            <span class="h-3 w-3 rounded bg-sun" />
            <span class="h-3 w-3 rounded bg-coral" />
          </div>
          <!-- cursor -->
          <span class="absolute right-12 top-20 text-lg">👆</span>
        </div>

        <!-- toolbar -->
        <div class="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span class="rounded-lg border-2 border-ink bg-sky px-2 py-1 font-display text-xs font-extrabold">control</span>
          <span class="grid h-7 w-7 place-items-center rounded-lg border-2 border-ink bg-white text-xs">⬇️</span>
          <span class="grid h-7 w-7 place-items-center rounded-lg border-2 border-ink bg-white text-xs">⬆️</span>
          <span class="grid h-7 w-7 place-items-center rounded-lg border-2 border-ink bg-white text-xs">⛶</span>
          <span class="ml-auto rounded-lg border-2 border-ink bg-coral px-2 py-1 font-display text-xs font-extrabold text-white">End</span>
        </div>
      </div>

      <!-- Chat panel -->
      <div class="hidden w-40 flex-col border-l-4 border-ink bg-white p-2.5 sm:flex">
        <div class="mb-2 font-display text-xs font-extrabold">Chat 💬</div>
        <div class="flex-1 space-y-2">
          <div class="flex justify-start">
            <span class="max-w-[90%] rounded-xl rounded-bl-sm bg-cream px-2 py-1 text-[11px] font-semibold leading-snug">Thanks for the help!</span>
          </div>
          <div class="flex justify-end">
            <span class="max-w-[90%] rounded-xl rounded-br-sm bg-grape px-2 py-1 text-[11px] font-semibold leading-snug text-white">On it — one sec 👍</span>
          </div>
        </div>
        <div class="mt-2 flex items-center gap-1">
          <span class="h-6 flex-1 rounded-md border-2 border-ink bg-cream" />
          <span class="grid h-6 w-6 place-items-center rounded-md border-2 border-ink bg-grape text-[10px] text-white">➤</span>
        </div>
      </div>
    </div>
  </div>
</template>

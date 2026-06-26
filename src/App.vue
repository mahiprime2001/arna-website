<script setup lang="ts">
import SiteNav from "./components/SiteNav.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-x-hidden font-body">
    <SiteNav />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>
    <SiteFooter />
  </div>
</template>

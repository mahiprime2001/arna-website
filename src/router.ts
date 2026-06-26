import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("./views/Home.vue") },
  { path: "/features", name: "features", component: () => import("./views/Features.vue") },
  { path: "/pricing", name: "pricing", component: () => import("./views/Pricing.vue") },
  { path: "/self-host", name: "self-host", component: () => import("./views/SelfHost.vue") },
  { path: "/download", name: "download", component: () => import("./views/Download.vue") },
  // Unknown paths fall back to home.
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, saved) {
    if (saved) return saved;
    if (to.hash) return { el: to.hash, top: 90, behavior: "smooth" };
    return { top: 0 };
  },
});

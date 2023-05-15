import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/Landing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("@/views/AboutView.vue"),
    // },
  ],
});

export default router;

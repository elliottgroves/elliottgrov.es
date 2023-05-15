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
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue")
    },
  ],
});

export default router;

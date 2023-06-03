import { createRouter, createWebHistory } from "vue-router"
import Landing from "@/views/Landing.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
      meta: {
        title: 'Elliott Groves Design'
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        title: 'About - Elliott Groves Design'
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue"),
      meta: {
        title: 'Contact - Elliott Groves Design'
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }
  next()
})

export default router

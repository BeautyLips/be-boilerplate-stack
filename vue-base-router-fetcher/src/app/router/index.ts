import LayoutDefault from "@/app/layouts/LayoutDefault/LayoutDefault.vue"
import { middlewarePipe } from "@/app/router/core/middlewarePipe"
import { globalNavFailure } from "@/app/router/error/globalNavFailure"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LayoutDefault",
      component: LayoutDefault,
      meta: {
        middleware: [],
      },

      children: [
        {
          path: "",
          name: "PageHome",
          component: () => import("@/app/pages/PageHome/PageHome.vue"),
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      name: "PageError404",
      component: () => import("@/app/pages/PageError404/PageError404.vue"),
    },
  ],
})

globalNavFailure(router)
middlewarePipe(router, {})

export default router

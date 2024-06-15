import LayoutAbout from "@/app/layouts/LayoutAbout/LayoutAbout.vue"
import LayoutDefault from "@/app/layouts/LayoutDefault/LayoutDefault.vue"
import { middlewarePipe } from "@/app/router/core/middlewarePipe"
import { globalNavFailure } from "@/app/router/error/globalNavFailure"
import { admin } from "@/app/router/middleware/admin"
import { auth } from "@/app/router/middleware/auth"
import { guest } from "@/app/router/middleware/guest"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LayoutDefault",
      component: LayoutDefault,
      meta: {
        middleware: [auth],
      },

      children: [
        {
          path: "",
          name: "PageHome",
          component: () => import("@/app/pages/PageHome/PageHome.vue"),
        },

        {
          path: "/image",
          name: "PageImage",
          component: () => import("@/app/pages/PageImage/PageImage.vue"),
        },

        {
          path: "/styles",
          name: "PageStyles",
          component: () => import("@/app/pages/PageStyles/PageStyles.vue"),
        },

        {
          path: "/todo",
          name: "PageTodo",
          component: () => import("@/app/pages/PageTodo/PageTodo.vue"),
        },

        {
          path: "/store",
          name: "PageStore",
          component: () => import("@/app/pages/PageStore/PageStore.vue"),
        },

        {
          path: "/error",
          name: "PageError",
          component: () => import("@/app/pages/PageError/PageError.vue"),
        },

        {
          path: "/admin",
          name: "PageAdmin",
          component: () => import("@/app/pages/PageAdmin/PageAdmin.vue"),
          meta: {
            middleware: [auth, admin],
          },
        },
      ],
    },

    {
      path: "/about",
      name: "LayoutAbout",
      component: LayoutAbout,
      meta: {
        middleware: [guest],
      },

      children: [
        {
          path: "",
          name: "PageAbout",
          component: () => import("@/app/pages/PageAbout/PageAbout.vue"),
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

import { pipe } from "@/app/router/core/pipe"
import type { MiddlewareContextUser } from "@/app/router/types/types"
import type { Router } from "vue-router"

export function middlewarePipe(
  router: Router,
  contextUser: MiddlewareContextUser,
) {
  router.beforeEach((to, from, next) => {
    if (!to.meta?.middleware || to.meta?.middleware?.length === 0) {
      return next()
    }

    const middleware = to.meta.middleware
    const context = {
      to,
      from,
      next,
      ...contextUser,
    }

    return middleware[0]({
      ...context,
      next: pipe(context, middleware, 1),
    })
  })
}

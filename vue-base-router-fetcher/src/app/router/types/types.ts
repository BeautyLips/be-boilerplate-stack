import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

export interface MiddlewareContextUser {
  [key: string]: unknown
}

export interface MiddlewareFn {
  (context: MiddlewareContext): ReturnType<NavigationGuardNext>
}

export interface MiddlewareContext extends MiddlewareContextUser {
  to: RouteLocationNormalized
  from: RouteLocationNormalized
  next: NavigationGuardNext
}

declare module "vue-router" {
  interface RouteMeta {
    middleware?: MiddlewareFn[]
  }
}

export function getMiddlewareFn(cb: MiddlewareFn) {
  return cb as MiddlewareFn
}

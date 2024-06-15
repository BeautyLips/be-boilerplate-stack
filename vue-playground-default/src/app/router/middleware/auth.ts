import { getMiddlewareFn } from "@/app/router/types/types"

export const auth = getMiddlewareFn(({ next }) => {
  const isAuth = true

  if (isAuth) {
    return next()
  } else {
    return next()
  }
})

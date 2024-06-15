import { getMiddlewareFn } from "@/app/router/types/types"

export const admin = getMiddlewareFn(({ next }) => {
  const isAdmin = false

  if (isAdmin) {
    return next()
  } else {
    return next(false)
  }
})

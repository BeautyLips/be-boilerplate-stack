import { getMiddlewareFn } from "@/app/router/types/types"

export const guest = getMiddlewareFn(({ next }) => {
  const isGuest = true

  if (isGuest) {
    return next()
  } else {
    return next()
  }
})

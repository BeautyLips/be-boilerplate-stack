import type { MiddlewareContext, MiddlewareFn } from "@/app/router/types/types"

export function pipe(
  context: MiddlewareContext,
  middleware: MiddlewareFn[],
  index: number,
) {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next
  }

  return () => {
    const nextPipeline = pipe(context, middleware, index + 1)

    nextMiddleware({ ...context, next: nextPipeline })
  }
}

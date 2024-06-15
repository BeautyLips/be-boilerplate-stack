import { useBreakpoints } from "@vueuse/core"
import type { InjectionKey } from "vue"
import { inject, type App } from "vue"

type PluginBreakpoints = ReturnType<
  typeof useBreakpoints<"sm" | "md" | "lg" | "xl" | "xxl">
>

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $mq: PluginBreakpoints
  }
}

const breakpoints = Symbol() as InjectionKey<PluginBreakpoints>

export const pluginBreakpoints = {
  install: (app: App) => {
    const context = useBreakpoints({
      sm: 576,
      md: 768,
      lg: 922,
      xl: 1200,
      xxl: 1600,
    })

    app.config.globalProperties.$mq = context
    app.provide(breakpoints, context)
  },
}

export function useContextMq() {
  return inject(breakpoints)
}

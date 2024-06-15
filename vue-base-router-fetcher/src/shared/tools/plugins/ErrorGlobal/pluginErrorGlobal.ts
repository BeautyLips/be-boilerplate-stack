import type { ComputedRef, InjectionKey } from "vue"
import { computed, inject, shallowRef, type App } from "vue"

interface PluginErrorGlobal {
  error: Error | null | unknown
  errorMessage: ComputedRef<string>
  setError(error: Error): void
  reset(): void
}

const errorGlobal = Symbol() as InjectionKey<PluginErrorGlobal>

export const pluginErrorGlobal = {
  install: (app: App) => {
    const error = shallowRef<Error | null>(null)

    const errorMessage = computed(() => {
      return error.value?.message ?? "Error: Unknown"
    })

    app.config.errorHandler = (err) => {
      console.error("ErrorGlobal:", err)

      error.value = err as unknown as Error
    }

    function setError(err: Error) {
      error.value = err
    }

    function reset() {
      error.value = null
    }

    const context = {
      error,
      errorMessage,
      setError,
      reset,
    }

    app.provide(errorGlobal, context)
  },
}

export function useContextErrorGlobal() {
  return inject(errorGlobal) as PluginErrorGlobal
}

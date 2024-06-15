import {
  computed,
  inject,
  onErrorCaptured,
  provide,
  shallowRef,
  type InjectionKey,
} from "vue"

const errorBoundary = Symbol() as InjectionKey<
  ReturnType<typeof useProviderErrorBoundary>
>

export function useProviderErrorBoundary() {
  const error = shallowRef<Error | null>(null)

  const errorMessage = computed(() => {
    return error.value?.message ?? "Error: Unknown"
  })

  onErrorCaptured((err) => {
    console.error("ErrorBoundary:", err)

    error.value = err

    return false
  })

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

  provide(errorBoundary, context)

  return context
}

export function useContextErrorBoundary() {
  return inject(errorBoundary)
}

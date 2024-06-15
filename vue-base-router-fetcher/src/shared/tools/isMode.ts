export function isMode() {
  return {
    dev: import.meta.env.DEV,
    prod: import.meta.env.PROD,
  }
}

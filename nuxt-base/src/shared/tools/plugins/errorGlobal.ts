export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (err) => {
    console.log("ErrorGlobal:", err)
  }
})

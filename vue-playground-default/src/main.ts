import "@/shared/assets/styles/main.scss"

import { pluginErrorGlobal } from "@/shared/tools/plugins/ErrorGlobal"
import { pluginBreakpoints } from "@/shared/tools/plugins/pluginBreakpoints"
import { VueQueryPlugin } from "@tanstack/vue-query"
import { createPinia } from "pinia"
import { createApp } from "vue"
import App from "./app/App.vue"
import router from "./app/router"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(pluginBreakpoints)
app.use(pluginErrorGlobal)

app.mount("#app")

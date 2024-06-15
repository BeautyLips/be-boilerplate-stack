import "@/shared/assets/styles/main.scss"

import { pluginErrorGlobal } from "@/shared/tools/plugins/ErrorGlobal"
import { pluginBreakpoints } from "@/shared/tools/plugins/pluginBreakpoints"
import { createApp } from "vue"
import App from "./app/App.vue"

const app = createApp(App)

app.use(pluginBreakpoints)
app.use(pluginErrorGlobal)

app.mount("#app")

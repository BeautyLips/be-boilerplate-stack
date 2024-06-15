import { fileURLToPath, URL } from "node:url"

import Vue from "@vitejs/plugin-vue"
import VueJsx from "@vitejs/plugin-vue-jsx"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig, type PluginOption } from "vite"
import { svg4VuePlugin } from "vite-plugin-svg4vue"
import VueDevTools from "vite-plugin-vue-devtools"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    VueDevTools(),

    svg4VuePlugin({
      defaultExport: "component",
      assetsDirName: "./src/shared/assets/icons",
    }),

    visualizer({
      filename: "docs-generated/stats/stats.html",
    }) as PluginOption,
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "../src/shared/assets/styles/global.scss" as *;',
      },
    },
  },
})

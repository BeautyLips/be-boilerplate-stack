// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  telemetry: false,

  devtools: { enabled: true },

  srcDir: "src/app/",

  app: {
    head: {
      meta: [
        { name: "theme-color", content: "#ffffff" },
        { name: "description", content: "Nuxt Playground Default" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.png" }],
    },
  },

  components: [
    {
      path: "~~/src/shared/components/ui/",
      extensions: [".vue", ".ts", ".js"],
      pathPrefix: false,
    },
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~~/src/shared/assets/styles/global.scss" as *;',
        },
      },
    },
  },

  css: ["~~/src/shared/assets/styles/main.scss"],

  plugins: ["~~/src/shared/tools/plugins/errorGlobal"],

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils/module",
    "nuxt-svgo",
    "nuxt-viewport",
  ],

  svgo: {
    global: false,
    componentPrefix: "icon",
  },

  image: {
    quality: 80,
    format: ["webp"],
    staticFilename: "[publicPath]/images/[name]-[hash][ext]",
    domains: ["localhost:3000"],
    screens: {
      sm: 576,
      md: 768,
      lg: 922,
      // xl: 1200,
      // xxl: 1600,
    },
  },

  viewport: {
    breakpoints: {
      sm: 576,
      md: 768,
      lg: 922,
      xl: 1200,
      xxl: 1600,
    },

    defaultBreakpoints: {
      desktop: "lg",
      mobile: "xs",
      tablet: "md",
    },

    fallbackBreakpoint: "lg",
  },

  pinia: {
    storesDirs: [
      "~~/src/shared/stores/**",
      "~~/src/entities/**/stores/**",
      "~~/src/features/**/stores/**",
      "~~/src/widgets/**/stores/**",
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },

  runtimeConfig: {
    public: {
      apiURL: "https://jsonplaceholder.typicode.com",
      cdnURL: "CDN_URL",
    },
  },
})

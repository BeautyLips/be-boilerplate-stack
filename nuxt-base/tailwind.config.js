/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/shared/components/**/*.{js,vue,ts}",
    "./src/features/**/ui/**/*.{js,vue,ts}",
    "./src/entities/**/ui/**/*.{js,vue,ts}",
    "./src/widgets/**/ui/**/*.{js,vue,ts}",
    "./src/app/layouts/**/*.vue",
    "./src/app/pages/**/*.vue",
    "./src/app/plugins/**/*.{js,ts}",
    "./src/app/app.vue",
    "./src/app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#42b883",
        white: "#ffffff",
        black: "#000000",
      },

      fontSize: {
        c1: [
          "32px",
          {
            lineHeight: "1.4",
            fontWeight: "700",
          },
        ],

        c2: [
          "24px",
          {
            lineHeight: "1.4",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
}

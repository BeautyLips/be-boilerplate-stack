/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        organica: ['organica-medium', 'sans-serif'],
        organicaBold: ['organica-bold', 'sans-serif'],
        organicaLight: ['organica-light', 'sans-serif'],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#1E1E1E",
        white: "#FEFEFE",
      },
    },
  },
  plugins: [],
} satisfies Config;

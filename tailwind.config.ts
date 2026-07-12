import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f8ecd9",
        pearl: "#fff8ec",
        champagne: "#ecd1b2",
        mist: "#f4e4ca",
        forest: "#5a2e1f",
        moss: "#8a6a3c",
        gold: "#b88952",
        rose: "#8a2f2c"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Avenir Next", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(97, 57, 25, 0.14)",
        silk: "0 16px 44px rgba(184, 137, 82, 0.2)"
      },
      backgroundImage: {
        satin:
          "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.92), transparent 28%), linear-gradient(135deg, #fff8ec 0%, #f4dfbd 44%, #f8ecd9 100%)",
        silk:
          "linear-gradient(125deg, rgba(255,255,255,.88), rgba(236,209,178,.58) 38%, rgba(248,236,217,.94) 72%), radial-gradient(circle at 70% 20%, rgba(184,137,82,.22), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;

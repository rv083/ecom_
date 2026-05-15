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
        ivory: "#fbf8f0",
        pearl: "#fffdf8",
        champagne: "#e9dcc4",
        mist: "#f4ede2",
        forest: "#12352d",
        moss: "#466052",
        gold: "#b99a5b",
        rose: "#b87f74"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Avenir Next", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(18, 53, 45, 0.12)",
        silk: "0 16px 44px rgba(185, 154, 91, 0.16)"
      },
      backgroundImage: {
        satin:
          "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.92), transparent 28%), linear-gradient(135deg, #fffdf8 0%, #efe1c9 46%, #fbf8f0 100%)",
        silk:
          "linear-gradient(125deg, rgba(255,255,255,.85), rgba(233,220,196,.52) 38%, rgba(251,248,240,.9) 72%), radial-gradient(circle at 70% 20%, rgba(185,154,91,.22), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.06em",
      },
      boxShadow: {
        glow: "0 0 70px rgba(255,255,255,0.08)"
      }
    },
  },
  plugins: [],
};
export default config;
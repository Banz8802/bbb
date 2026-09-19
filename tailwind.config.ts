import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        navy: "#17233d",
        "navy-light": "#1e2e4f",
        steel: "#45617f",
        skyglass: "#d9ecfb",
        gold: "#f6c72f",
        "gold-muted": "#f0bc0e",
        cream: "#fdf9f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 35, 61, 0.18)",
        card: "0 4px 24px rgba(23, 35, 61, 0.10)",
        "card-hover": "0 16px 48px rgba(23, 35, 61, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        "fade-up-delay-1": "fade-up 0.7s 0.15s ease forwards",
        "fade-up-delay-2": "fade-up 0.7s 0.30s ease forwards",
        "fade-up-delay-3": "fade-up 0.7s 0.45s ease forwards",
        "fade-in": "fade-in 0.5s ease forwards",
        "slide-down": "slide-down 0.25s ease forwards",
        "scale-in": "scale-in 0.4s ease forwards",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // English Fonts
        cinzel: ["Cinzel", "serif"],
        copperplate: ["Copperplate Gothic", "serif"],
        "copperplate-light": ["Copperplate Gothic Light", "serif"],
        julius: ["Julius Sans One", "sans-serif"],
        lemon: ["Lemon Milk", "sans-serif"],
        optimus: ["Optimus Princeps", "serif"],
        trajan: ["Trajan Pro", "serif"],

        // Arabic Fonts
        thuluth: ["A Thuluth", "serif"],
        "am-thulth": ["AM Thulth", "serif"],
        hafs: ["KFGQPC Hafs", "serif"],
        "hafs-taweel": ["KFGQPC Hafs Taweel", "serif"],
        "lifta-black": ["Lifta Black", "sans-serif"],
        "lifta-swash": ["Lifta Swash", "serif"],
        "surah-diwani": ["Surah Name Diwani", "serif"],
        "quraa-diwani": ["Quraa Diwani", "serif"],
        "quraa-names": ["Quraa Names", "serif"],
        "quraa-alharamayn": ["Quraa Alharamayn", "serif"],
        "surah-ejazah": ["Surah Ejazah", "serif"],
      },
      colors: {
        gold: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#d4af37",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
      },
    },
  },
  plugins: [],
};

export default config;

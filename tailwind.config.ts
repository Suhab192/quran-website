import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Force Tailwind JIT to always generate these font classes
    "font-cinzel-regular",
    "font-cinzel-bold",
    "font-copperplate-gothic-light",
    "font-copperplate-gothic-std",
    "font-julius-sans-one",
    "font-lemon-milk",
    "font-lemon-milk-bold",
    "font-optimus-princeps",
    "font-optimus-princeps-semibold",
    "font-trajan-pro-bold",
    "font-a-thuluth",
    "font-am-thulth",
    "font-hafs-taweel",
    "font-hafs-uthmanic",
    "font-lifta-black",
    "font-liftaswash",
    "font-surah-ejazah",
    "font-surah-diwani",
    "font-ayb-quraa-diwani",
    "font-quraa-names",
    "font-gf-fayed-reciters",
    "font-rafekat-ramadan",
    "font-quraa-alharamayn",
    "font-ayb-name-of-quraa",
    "font-kholood",
    "font-ramadan-dates",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ── English Fonts ──
        "cinzel-regular": ["'Cinzel-Regular'", "serif"],
        "cinzel-bold": ["'Cinzel-Bold'", "serif"],
        "copperplate-gothic-light": ["'Copperplate-Gothic-Light'", "serif"],
        "copperplate-gothic-std": ["'Copperplate-Gothic-Std-32-BC'", "serif"],
        "julius-sans-one": ["'JuliusSansOne-Regular'", "sans-serif"],
        "lemon-milk": ["'LemonMilk'", "sans-serif"],
        "lemon-milk-bold": ["'LemonMilk-Bold'", "sans-serif"],
        "optimus-princeps": ["'OptimusPrinceps'", "serif"],
        "optimus-princeps-semibold": ["'OptimusPrinceps-SemiBold'", "serif"],
        "trajan-pro-bold": ["'TrajanPro-Bold'", "serif"],

        // ── Arabic Text Fonts ──
        "a-thuluth": ["'a-thuluth'", "serif"],
        "am-thulth": ["'am-thulth'", "serif"],
        "hafs-taweel": ["'hafs-taweel'", "serif"],
        "hafs-uthmanic": ["'hafs-uthmanic'", "serif"],
        "lifta-black": ["'lifta-black'", "sans-serif"],
        "liftaswash": ["'liftaswash'", "serif"],

        // ── Arabic Symbol / Mapping Fonts ──
        "surah-ejazah": ["'surah-ejazah'", "serif"],
        "surah-diwani": ["'surah-diwani'", "serif"],
        "ayb-quraa-diwani": ["'ayb-quraa-diwani'", "serif"],
        "quraa-names": ["'quraa-names'", "serif"],
        "gf-fayed-reciters": ["'gf-fayed-reciters'", "serif"],
        "rafekat-ramadan": ["'rafekat-ramadan'", "serif"],
        "quraa-alharamayn": ["'quraa-alharamayn'", "serif"],
        "ayb-name-of-quraa": ["'ayb-name-of-quraa'", "serif"],
        "kholood": ["'kholood'", "serif"],
        "ramadan-dates": ["'ramadan-dates'", "serif"],
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

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
        // ── English Fonts (each weight is its own family) ──
        "cinzel-regular": ["Cinzel-Regular", "serif"],
        "cinzel-bold": ["Cinzel-Bold", "serif"],
        "copperplate-gothic-light": ["Copperplate-Gothic-Light", "serif"],
        "copperplate-gothic-std": ["Copperplate-Gothic-Std-32-BC", "serif"],
        "julius-sans-one": ["JuliusSansOne-Regular", "sans-serif"],
        "lemon-milk": ["LemonMilk", "sans-serif"],
        "lemon-milk-bold": ["LemonMilk-Bold", "sans-serif"],
        "optimus-princeps": ["OptimusPrinceps", "serif"],
        "optimus-princeps-semibold": ["OptimusPrinceps-SemiBold", "serif"],
        "trajan-pro-bold": ["TrajanPro-Bold", "serif"],

        // ── Arabic Text Fonts ──
        "a-thuluth": ["AThuluth-Regular", "serif"],
        "am-thulth": ["AMThulth-Regular", "serif"],
        "kfgqpc-hafs-taweel": ["Elgharib-KFGQPC-HafsTAWEEL", "serif"],
        "kfgqpc-hafs-uthmanic": ["KfgqpcHafsUthmanic", "serif"],
        "lifta-black": ["Lifta-Black", "sans-serif"],
        "liftaswash-regular": ["Liftaswash-Regular", "serif"],

        // ── Arabic Symbol / Calligraphy Fonts (001 format) ──
        "elgharib-ayb-quraa-diwani": ["Elgharib-AYB-QuraaDiwani", "serif"],
        "surah-name-ejazah": ["SurahNameEjazah", "serif"],
        "elgharib-khalid-quraa-names": ["Elgharib-Khalid-QuraaNames", "serif"],
        "gf-fayed-reciters-name": ["GF-FAYED-RecitersName", "serif"],
        "elgharib-rafekat-ramadan": ["Elgharib-RafekatAlward-Ramadan", "serif"],
        "elgharib-quraa-alharamayn": ["Elgharib-Quraa-Alharamayn", "serif"],
        "elgharib-surah-name-diwani": ["Elgharib-SurahNameDiwani", "serif"],
        "elgharib-ayb-name-of-quraa": ["Elgharib-AYB-NameOfQuraa", "serif"],
        "elgharib-kholood-ramadan": ["Elgharib-KHolood-Ramadan", "serif"],
        "elgharib-ayoub-ramadan-dates": ["Elgharib-Ayoub-RamadanDates", "serif"],
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

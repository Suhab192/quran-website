"use client";

import { useState } from "react";

type FontEntry = {
  name: string;
  tailwindClass: string;
  cssFamily: string;
  file: string;
  displayText: string;
};

// ── English Fonts ──
const englishFonts: FontEntry[] = [
  { name: "Cinzel-Regular", tailwindClass: "font-cinzel-regular", cssFamily: "'Cinzel-Regular'", file: "Cinzel-Regular.otf", displayText: "Elevate Your Edits" },
  { name: "Cinzel-Bold", tailwindClass: "font-cinzel-bold", cssFamily: "'Cinzel-Bold'", file: "Cinzel-Bold.otf", displayText: "Elevate Your Edits" },
  { name: "Copperplate-Gothic-Light", tailwindClass: "font-copperplate-gothic-light", cssFamily: "'Copperplate-Gothic-Light'", file: "copperplate-gothic-light.ttf", displayText: "Elevate Your Edits" },
  { name: "Copperplate-Gothic-Std", tailwindClass: "font-copperplate-gothic-std", cssFamily: "'Copperplate-Gothic-Std-32-BC'", file: "Copperplate-Gothic-Std-32-BC.ttf", displayText: "Elevate Your Edits" },
  { name: "JuliusSansOne", tailwindClass: "font-julius-sans-one", cssFamily: "'JuliusSansOne-Regular'", file: "JuliusSansOne-Regular.ttf", displayText: "Elevate Your Edits" },
  { name: "LemonMilk", tailwindClass: "font-lemon-milk", cssFamily: "'LemonMilk'", file: "LemonMilk.otf", displayText: "Elevate Your Edits" },
  { name: "LemonMilk-Bold", tailwindClass: "font-lemon-milk-bold", cssFamily: "'LemonMilk-Bold'", file: "LemonMilkbold.otf", displayText: "Elevate Your Edits" },
  { name: "OptimusPrinceps", tailwindClass: "font-optimus-princeps", cssFamily: "'OptimusPrinceps'", file: "OptimusPrinceps.ttf", displayText: "Elevate Your Edits" },
  { name: "OptimusPrinceps-SemiBold", tailwindClass: "font-optimus-princeps-semibold", cssFamily: "'OptimusPrinceps-SemiBold'", file: "OptimusPrincepsSemiBold.ttf", displayText: "Elevate Your Edits" },
  { name: "TrajanPro-Bold", tailwindClass: "font-trajan-pro-bold", cssFamily: "'TrajanPro-Bold'", file: "TrajanProBold.ttf", displayText: "Elevate Your Edits" },
];

// ── Arabic Text Fonts (Ayah display) ──
const arabicTextFonts: FontEntry[] = [
  { name: "a-thuluth", tailwindClass: "font-a-thuluth", cssFamily: "'a-thuluth'", file: "a-thuluth.ttf", displayText: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ" },
  { name: "am-thulth", tailwindClass: "font-am-thulth", cssFamily: "'am-thulth'", file: "am-thulth.ttf", displayText: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ" },
  { name: "hafs-taweel", tailwindClass: "font-hafs-taweel", cssFamily: "'hafs-taweel'", file: "hafs-taweel.ttf", displayText: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ" },
  { name: "hafs-uthmanic", tailwindClass: "font-hafs-uthmanic", cssFamily: "'hafs-uthmanic'", file: "hafs-uthmanic.ttf", displayText: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ" },
  { name: "lifta-black", tailwindClass: "font-lifta-black", cssFamily: "'lifta-black'", file: "lifta-black.otf", displayText: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ" },
  { name: "liftaswash", tailwindClass: "font-liftaswash", cssFamily: "'liftaswash'", file: "liftaswash.otf", displayText: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ" },
];

// ── Surah Fonts — display: 003  004 ──
const surahFonts: FontEntry[] = [
  { name: "surah-ejazah", tailwindClass: "font-surah-ejazah", cssFamily: "'surah-ejazah'", file: "surah-ejazah.ttf", displayText: "003  004" },
  { name: "surah-diwani", tailwindClass: "font-surah-diwani", cssFamily: "'surah-diwani'", file: "surah-diwani.ttf", displayText: "003  004" },
];

// ── GF-FAYED — special probe text ──
const gfFayedFont: FontEntry = {
  name: "gf-fayed-reciters", tailwindClass: "font-gf-fayed-reciters", cssFamily: "'gf-fayed-reciters'", file: "gf-fayed-reciters.ttf", displayText: "a b c 1 2",
};

// ── All other mapping fonts — display: 1  2  3  4 ──
const mappingFonts: FontEntry[] = [
  { name: "ayb-name-of-quraa", tailwindClass: "font-ayb-name-of-quraa", cssFamily: "'ayb-name-of-quraa'", file: "ayb-name-of-quraa.ttf", displayText: "1  2  3  4" },
  { name: "ayb-quraa-diwani", tailwindClass: "font-ayb-quraa-diwani", cssFamily: "'ayb-quraa-diwani'", file: "ayb-quraa-diwani.ttf", displayText: "1  2  3  4" },
  { name: "quraa-names", tailwindClass: "font-quraa-names", cssFamily: "'quraa-names'", file: "quraa-names.ttf", displayText: "1  2  3  4" },
  { name: "kholood", tailwindClass: "font-kholood", cssFamily: "'kholood'", file: "kholood.ttf", displayText: "1  2  3  4" },
  { name: "ramadan-dates", tailwindClass: "font-ramadan-dates", cssFamily: "'ramadan-dates'", file: "ramadan-dates.ttf", displayText: "1  2  3  4" },
  { name: "quraa-alharamayn", tailwindClass: "font-quraa-alharamayn", cssFamily: "'quraa-alharamayn'", file: "quraa-alharamayn.ttf", displayText: "1  2  3  4" },
  { name: "rafekat-ramadan", tailwindClass: "font-rafekat-ramadan", cssFamily: "'rafekat-ramadan'", file: "rafekat-ramadan.ttf", displayText: "1  2  3  4" },
];

/* ─────────────────────────────────────────────── */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  };
  return (
    <button onClick={handleCopy}
      className="px-4 py-2 text-sm rounded-lg transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white backdrop-blur-sm">
      {copied ? (
        <span className="flex items-center gap-2 text-emerald-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Copied!
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          Copy Class
        </span>
      )}
    </button>
  );
}

/* ── English Font Card ── */
function EnglishCard({ font }: { font: FontEntry }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-500">
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs uppercase tracking-widest bg-white/10 backdrop-blur-sm rounded-full text-neutral-400 border border-white/5">
          {font.name}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] text-neutral-500 font-mono">{font.file}</span>
      </div>
      <div className="pt-20 pb-8 px-8">
        <div className="text-4xl md:text-5xl lg:text-6xl text-center tracking-widest text-white/90 leading-tight"
             style={{ fontFamily: `${font.cssFamily}, serif` }}>
          {font.displayText}
        </div>
      </div>
      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-neutral-500 font-mono bg-neutral-900/50 px-3 py-1.5 rounded-lg">{font.tailwindClass}</code>
        <CopyButton text={font.tailwindClass} />
      </div>
    </div>
  );
}

/* ── Arabic Text Card ── */
function ArabicTextCard({ font }: { font: FontEntry }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-900/30 hover:border-amber-800/50 transition-all duration-500">
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs uppercase tracking-widest bg-amber-500/10 backdrop-blur-sm rounded-full text-amber-400/80 border border-amber-500/20">
          {font.name}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] text-amber-600/60 font-mono">{font.file}</span>
      </div>
      <div className="pt-20 pb-8 px-8">
        <div className="text-4xl md:text-5xl text-center leading-loose text-amber-50/90" dir="rtl"
             style={{
               fontFamily: `${font.cssFamily}, serif`,
               fontWeight: "normal",
               fontStyle: "normal",
               textShadow: "0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.15)",
             }}>
          {font.displayText}
        </div>
        <p className="text-center text-xs text-neutral-500 mt-4 tracking-wide">Surah Hud (11:88)</p>
      </div>
      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-amber-600/60 font-mono bg-amber-900/20 px-3 py-1.5 rounded-lg border border-amber-800/20">{font.tailwindClass}</code>
        <CopyButton text={font.tailwindClass} />
      </div>
    </div>
  );
}

/* ── Surah Card — 003 004 ── */
function SurahCard({ font }: { font: FontEntry }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-emerald-900/30 hover:border-emerald-800/50 transition-all duration-500">
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs uppercase tracking-widest bg-emerald-500/10 backdrop-blur-sm rounded-full text-emerald-400/80 border border-emerald-500/20">
          {font.name}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] uppercase tracking-wider text-emerald-400/60 bg-emerald-500/10 rounded-full border border-emerald-500/10">
          Surah Font
        </span>
      </div>
      <div className="pt-20 pb-8 px-8">
        <div className="text-6xl md:text-7xl text-center leading-relaxed text-emerald-100/90"
             style={{
               fontFamily: `${font.cssFamily}, serif`,
               fontWeight: "normal",
               fontStyle: "normal",
               textShadow: "0 0 30px rgba(16, 185, 129, 0.25), 0 0 60px rgba(16, 185, 129, 0.1)",
               letterSpacing: "0.15em",
             }}>
          {font.displayText}
        </div>
        <p className="text-center text-xs text-emerald-400/50 mt-5 tracking-wide">
          003 = Ali &apos;Imran, 004 = An-Nisa
        </p>
      </div>
      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-emerald-500/60 font-mono bg-emerald-900/20 px-3 py-1.5 rounded-lg border border-emerald-800/20">{font.tailwindClass}</code>
        <CopyButton text={font.tailwindClass} />
      </div>
    </div>
  );
}

/* ── Symbol Mapping Card — uses inline fontFamily directly ── */
function MappingCard({ font, borderColor, textColor, tagColor, tagBg }: {
  font: FontEntry;
  borderColor: string;
  textColor: string;
  tagColor: string;
  tagBg: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border ${borderColor} transition-all duration-500`}>
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1.5 text-xs uppercase tracking-widest ${tagBg} backdrop-blur-sm rounded-full ${tagColor} border border-current/20`}>
          {font.name}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className={`px-2 py-1 text-[10px] uppercase tracking-wider ${tagColor} ${tagBg} rounded-full`}>
          Symbol Map
        </span>
      </div>
      <div className="pt-20 pb-8 px-8">
        <div className={`text-6xl md:text-7xl text-center leading-relaxed ${textColor}`}
             style={{
               fontFamily: `${font.cssFamily}, serif`,
               fontWeight: "normal",
               fontStyle: "normal",
               letterSpacing: "0.2em",
             }}>
          {font.displayText}
        </div>
        <p className={`text-center text-xs mt-5 tracking-wide opacity-50 ${tagColor}`}>
          font-family: {font.cssFamily}
        </p>
      </div>
      <div className="px-8 pb-6 flex items-center justify-between">
        <code className={`text-xs font-mono px-3 py-1.5 rounded-lg opacity-60 ${tagBg} ${tagColor}`}>{font.tailwindClass}</code>
        <CopyButton text={font.tailwindClass} />
      </div>
    </div>
  );
}

/* ── Page ── */
export default function FontGallery() {
  return (
    <main className="min-h-screen bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-6 tracking-tight font-bold">
          Font Gallery
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Fonts rendered via inline <code className="text-neutral-300">fontFamily</code> — bypasses Tailwind for maximum reliability.
        </p>
        <p className="text-neutral-500 text-sm mt-2">
          {englishFonts.length} English &bull; {arabicTextFonts.length} Arabic Text &bull; {surahFonts.length} Surah &bull; 1 GF-FAYED &bull; {mappingFonts.length} Symbol Mapping
        </p>
      </div>

      {/* ── English ── */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
          <h2 className="text-2xl font-light text-neutral-300 tracking-widest uppercase">English ({englishFonts.length})</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {englishFonts.map((f) => <EnglishCard key={f.name} font={f} />)}
        </div>
      </section>

      {/* ── Arabic Text ── */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
          <h2 className="text-2xl font-light text-amber-200/80 tracking-widest uppercase">Arabic Text ({arabicTextFonts.length})</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {arabicTextFonts.map((f) => <ArabicTextCard key={f.name} font={f} />)}
        </div>
      </section>

      {/* ── Surah Fonts ── */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent" />
          <h2 className="text-2xl font-light text-emerald-300/80 tracking-widest uppercase">Surah Fonts ({surahFonts.length})</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent" />
        </div>
        <p className="text-center text-emerald-400/40 text-sm mb-10">001/002 are empty. Showing 003, 004.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {surahFonts.map((f) => <SurahCard key={f.name} font={f} />)}
        </div>
      </section>

      {/* ── GF-FAYED (isolated — special probe text) ── */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-900/50 to-transparent" />
          <h2 className="text-2xl font-light text-sky-300/80 tracking-widest uppercase">GF-FAYED Reciters (1)</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-900/50 to-transparent" />
        </div>
        <p className="text-center text-sky-400/40 text-sm mb-10">Probe text: a b c 1 2 — finding which keys trigger calligraphy.</p>
        <div className="grid grid-cols-1 gap-6">
          <MappingCard font={gfFayedFont} borderColor="border-sky-900/30 hover:border-sky-800/50" textColor="text-sky-100/90" tagColor="text-sky-400/80" tagBg="bg-sky-500/10" />
        </div>
      </section>

      {/* ── Symbol Mapping ── */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-900/50 to-transparent" />
          <h2 className="text-2xl font-light text-violet-300/80 tracking-widest uppercase">Symbol Mapping ({mappingFonts.length})</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-900/50 to-transparent" />
        </div>
        <p className="text-center text-violet-400/40 text-sm mb-10">Raw digits: 1, 2, 3, 4 — no padding, no letters.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mappingFonts.map((f) => <MappingCard key={f.name} font={f} borderColor="border-violet-900/30 hover:border-violet-800/50" textColor="text-violet-100/90" tagColor="text-violet-400/80" tagBg="bg-violet-500/10" />)}
        </div>
      </section>

      <footer className="max-w-7xl mx-auto mt-24 pt-12 border-t border-neutral-900">
        <p className="text-center text-neutral-600 text-sm">
          Fonts served from <code className="text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">/public/english/</code> and{" "}
          <code className="text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">/public/arabic/</code>
          {" "}&bull; Rendered via inline <code className="text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">style=&#123;&#123; fontFamily &#125;&#125;</code>
        </p>
      </footer>
    </main>
  );
}

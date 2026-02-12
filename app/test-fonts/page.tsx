"use client";

import { useState } from "react";

// ── GROUP C: English Fonts ──
// Display: "Elevate Your Edits"
const englishFonts = [
  { name: "Cinzel-Regular", class: "font-cinzel-regular", file: "Cinzel-Regular.otf" },
  { name: "Cinzel-Bold", class: "font-cinzel-bold", file: "Cinzel-Bold.otf" },
  { name: "Copperplate-Gothic-Light", class: "font-copperplate-gothic-light", file: "copperplate-gothic-light.ttf" },
  { name: "Copperplate-Gothic-Std-32-BC", class: "font-copperplate-gothic-std", file: "Copperplate-Gothic-Std-32-BC.ttf" },
  { name: "JuliusSansOne-Regular", class: "font-julius-sans-one", file: "JuliusSansOne-Regular.ttf" },
  { name: "LemonMilk", class: "font-lemon-milk", file: "LemonMilk.otf" },
  { name: "LemonMilk-Bold", class: "font-lemon-milk-bold", file: "LemonMilkbold.otf" },
  { name: "OptimusPrinceps", class: "font-optimus-princeps", file: "OptimusPrinceps.ttf" },
  { name: "OptimusPrinceps-SemiBold", class: "font-optimus-princeps-semibold", file: "OptimusPrincepsSemiBold.ttf" },
  { name: "TrajanPro-Bold", class: "font-trajan-pro-bold", file: "TrajanProBold.ttf" },
];

// ── Arabic Text Fonts ──
// Display: Arabic Ayah
const arabicTextFonts = [
  { name: "AThuluth-Regular", class: "font-a-thuluth", file: "AThuluthRegular.ttf" },
  { name: "AMThulth-Regular", class: "font-am-thulth", file: "AM_Thulth_Regular.ttf" },
  { name: "Elgharib-KFGQPC-HafsTAWEEL", class: "font-kfgqpc-hafs-taweel", file: "Elgharib-KFGQPC-HafsTAWEEL.ttf" },
  { name: "KfgqpcHafsUthmanic", class: "font-kfgqpc-hafs-uthmanic", file: "KfgqpcHafsUthmanicScriptRegular.ttf" },
  { name: "Lifta-Black", class: "font-lifta-black", file: "Lifta-Black.otf" },
  { name: "Liftaswash-Regular", class: "font-liftaswash-regular", file: "Liftaswashfixed-Regular.otf" },
];

// ── GROUP A: 3-Digit Padded Surah Fonts ──
// ONLY these two use 001, 002, 003
const groupAFonts = [
  { name: "SurahNameEjazah", class: "font-surah-name-ejazah", file: "SurahNameEjazah.ttf" },
  { name: "Elgharib-SurahNameDiwani", class: "font-elgharib-surah-name-diwani", file: "Elgharib-SurahNameDiwani.ttf" },
];

// ── GROUP B: Normal Digit Mapping Fonts ──
// These use raw digits: 1 2 3 4 5 (NO leading zeros — '0' triggers unwanted symbols)
const groupBFonts = [
  { name: "Elgharib-AYB-QuraaDiwani", class: "font-elgharib-ayb-quraa-diwani", file: "Elgharib-AYB-QuraaDiwani.ttf" },
  { name: "Elgharib-Khalid-QuraaNames", class: "font-elgharib-khalid-quraa-names", file: "Elgharib-Khalid-QuraaNames.ttf" },
  { name: "GF-FAYED-RecitersName", class: "font-gf-fayed-reciters-name", file: "GF-FAYED-RecitersName.ttf" },
  { name: "Elgharib-RafekatAlward-Ramadan", class: "font-elgharib-rafekat-ramadan", file: "Elgharib-RafekatAlward-Ramadan.ttf" },
  { name: "Elgharib-Quraa-Alharamayn", class: "font-elgharib-quraa-alharamayn", file: "Elgharib-Quraa-Alharamayn.ttf" },
  { name: "Elgharib-AYB-NameOfQuraa", class: "font-elgharib-ayb-name-of-quraa", file: "Elgharib-AYB-NameOfQuraa.ttf" },
  { name: "Elgharib-KHolood-Ramadan", class: "font-elgharib-kholood-ramadan", file: "Elgharib-KHolood-Ramadan.ttf" },
  { name: "Elgharib-Ayoub-RamadanDates", class: "font-elgharib-ayoub-ramadan-dates", file: "Elgharib-Ayoub-RamadanDates.ttf" },
];

type FontEntry = { name: string; class: string; file: string };

// ── Copy Button ──
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 text-sm rounded-lg transition-all duration-300 
                 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20
                 text-neutral-400 hover:text-white backdrop-blur-sm"
      style={{ fontWeight: 'normal' }}
    >
      {copied ? (
        <span className="flex items-center gap-2 text-emerald-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Class
        </span>
      )}
    </button>
  );
}

// ── GROUP C: English Font Card ──
function EnglishFontCard({ font }: { font: FontEntry }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 
                    border border-neutral-800 hover:border-neutral-700 transition-all duration-500
                    hover:shadow-2xl hover:shadow-neutral-900/50">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs uppercase tracking-widest 
                        bg-white/10 backdrop-blur-sm rounded-full text-neutral-400 border border-white/5"
              style={{ fontWeight: 'normal' }}>
          {font.name}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] text-neutral-500 font-mono max-w-[200px] truncate block" title={font.file}>
          {font.file}
        </span>
      </div>

      <div className="pt-20 pb-8 px-8">
        <div className={`${font.class} text-4xl md:text-5xl lg:text-6xl text-center 
                        tracking-widest text-white/90 leading-tight`}>
          Elevate Your Edits
        </div>
      </div>

      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-neutral-500 font-mono bg-neutral-900/50 px-3 py-1.5 rounded-lg">
          {font.class}
        </code>
        <CopyButton text={font.class} />
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}

// ── Arabic Text Font Card ──
function ArabicTextFontCard({ font }: { font: FontEntry }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 
                    border border-amber-900/30 hover:border-amber-800/50 transition-all duration-500
                    hover:shadow-2xl hover:shadow-amber-900/20">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs uppercase tracking-widest 
                        bg-amber-500/10 backdrop-blur-sm rounded-full text-amber-400/80 border border-amber-500/20"
              style={{ fontWeight: 'normal' }}>
          {font.name}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] text-amber-600/60 font-mono max-w-[200px] truncate block" title={font.file}>
          {font.file}
        </span>
      </div>

      <div className="pt-20 pb-8 px-8">
        <div 
          className={`${font.class} text-4xl md:text-5xl text-center leading-loose text-amber-50/90`}
          dir="rtl"
          style={{
            fontWeight: 'normal',
            fontStyle: 'normal',
            textShadow: '0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.15)',
          }}
        >
          وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ
        </div>
        <p className="text-center text-xs text-neutral-500 mt-4 tracking-wide">
          Surah Hud (11:88)
        </p>
      </div>

      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-amber-600/60 font-mono bg-amber-900/20 px-3 py-1.5 rounded-lg border border-amber-800/20">
          {font.class}
        </code>
        <CopyButton text={font.class} />
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent" />
      </div>
    </div>
  );
}

// ── GROUP A: 3-Digit Padded Surah Font Card ──
// ONLY SurahNameEjazah and Elgharib-SurahNameDiwani
// Display: 001  002  003
function GroupAFontCard({ font }: { font: FontEntry }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 
                    border border-emerald-900/30 hover:border-emerald-800/50 transition-all duration-500
                    hover:shadow-2xl hover:shadow-emerald-900/20">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs uppercase tracking-widest 
                        bg-emerald-500/10 backdrop-blur-sm rounded-full text-emerald-400/80 border border-emerald-500/20"
              style={{ fontWeight: 'normal' }}>
          {font.name}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] uppercase tracking-wider text-emerald-400/60 bg-emerald-500/10 rounded-full border border-emerald-500/10">
          Surah 001 Format
        </span>
      </div>

      <div className="pt-20 pb-4 px-8">
        <div 
          className={`${font.class} text-5xl md:text-6xl lg:text-7xl text-center leading-relaxed text-emerald-100/90`}
          style={{
            fontWeight: 'normal',
            fontStyle: 'normal',
            textShadow: '0 0 30px rgba(16, 185, 129, 0.25), 0 0 60px rgba(16, 185, 129, 0.1)',
            letterSpacing: '0.15em',
          }}
        >
          001{"  "}002{"  "}003
        </div>
        <p className="text-center text-xs text-emerald-400/50 mt-5 tracking-wide italic">
          3-digit padded: 001 = Al-Fatihah, 002 = Al-Baqarah, 003 = Ali &apos;Imran
        </p>
      </div>

      <div className="px-8 pt-2 pb-1">
        <p className="text-[10px] text-emerald-500/40 font-mono truncate" title={font.file}>
          {font.file}
        </p>
      </div>

      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-emerald-500/60 font-mono bg-emerald-900/20 px-3 py-1.5 rounded-lg border border-emerald-800/20">
          {font.class}
        </code>
        <CopyButton text={font.class} />
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent" />
      </div>
    </div>
  );
}

// ── GROUP B: Normal Digit Mapping Font Card ──
// All other mapping fonts: GF-FAYED, Reciters, Ramadan, Alharamayn, etc.
// Display: 1  2  3  4  5  (NO leading zeros — '0' triggers unwanted symbol glitches)
function GroupBFontCard({ font }: { font: FontEntry }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 
                    border border-violet-900/30 hover:border-violet-800/50 transition-all duration-500
                    hover:shadow-2xl hover:shadow-violet-900/20">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs uppercase tracking-widest 
                        bg-violet-500/10 backdrop-blur-sm rounded-full text-violet-400/80 border border-violet-500/20"
              style={{ fontWeight: 'normal' }}>
          {font.name}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] uppercase tracking-wider text-violet-400/60 bg-violet-500/10 rounded-full border border-violet-500/10">
          Symbol Map
        </span>
      </div>

      <div className="pt-20 pb-4 px-8">
        <div 
          className={`${font.class} text-5xl md:text-6xl lg:text-7xl text-center leading-relaxed text-violet-100/90`}
          style={{
            fontWeight: 'normal',
            fontStyle: 'normal',
            textShadow: '0 0 30px rgba(139, 92, 246, 0.25), 0 0 60px rgba(139, 92, 246, 0.1)',
            letterSpacing: '0.2em',
          }}
        >
          1{"  "}2{"  "}3{"  "}4{"  "}5
        </div>
        <p className="text-center text-xs text-violet-400/50 mt-5 tracking-wide italic">
          Symbol Map: Raw digits only — no leading zeros
        </p>
      </div>

      <div className="px-8 pt-2 pb-1">
        <p className="text-[10px] text-violet-500/40 font-mono truncate" title={font.file}>
          {font.file}
        </p>
      </div>

      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-violet-500/60 font-mono bg-violet-900/20 px-3 py-1.5 rounded-lg border border-violet-800/20">
          {font.class}
        </code>
        <CopyButton text={font.class} />
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent" />
      </div>
    </div>
  );
}

// ── Page ──
export default function FontGallery() {
  return (
    <main className="min-h-screen bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-white via-neutral-200 to-neutral-400 
                       bg-clip-text text-transparent mb-6 tracking-tight"
            style={{ fontWeight: 'bold' }}>
          Font Gallery
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Complete collection — every file, every weight, every family. Click &quot;Copy Class&quot; to use any font in your code.
        </p>
        <p className="text-neutral-500 text-sm mt-2">
          {englishFonts.length} English &bull; {arabicTextFonts.length} Arabic text &bull; {groupAFonts.length} Surah (001) &bull; {groupBFonts.length} Symbol (1-5)
        </p>
      </div>

      {/* GROUP C: English Fonts */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
          <h2 className="text-2xl font-light text-neutral-300 tracking-widest uppercase">
            English Fonts ({englishFonts.length})
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {englishFonts.map((font) => (
            <EnglishFontCard key={font.class} font={font} />
          ))}
        </div>
      </section>

      {/* Arabic Text Fonts */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
          <h2 className="text-2xl font-light text-amber-200/80 tracking-widest uppercase">
            Arabic Text Fonts ({arabicTextFonts.length})
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {arabicTextFonts.map((font) => (
            <ArabicTextFontCard key={font.class} font={font} />
          ))}
        </div>
      </section>

      {/* GROUP A: 3-Digit Padded Surah Fonts */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent" />
          <h2 className="text-2xl font-light text-emerald-300/80 tracking-widest uppercase">
            Surah Name Fonts — 001 Format ({groupAFonts.length})
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent" />
        </div>
        <p className="text-center text-emerald-400/40 text-sm mb-10 max-w-xl mx-auto">
          These two fonts require 3-digit padded numbers. Type 001 for Al-Fatihah, 114 for An-Nas.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {groupAFonts.map((font) => (
            <GroupAFontCard key={font.class} font={font} />
          ))}
        </div>
      </section>

      {/* GROUP B: Normal Digit Mapping Fonts */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-900/50 to-transparent" />
          <h2 className="text-2xl font-light text-violet-300/80 tracking-widest uppercase">
            Symbol Mapping Fonts — Raw Digits ({groupBFonts.length})
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-900/50 to-transparent" />
        </div>
        <p className="text-center text-violet-400/40 text-sm mb-10 max-w-xl mx-auto">
          These fonts map calligraphy symbols to raw digits. Use 1, 2, 3 — never 001 (the &apos;0&apos; triggers unwanted symbols).
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {groupBFonts.map((font) => (
            <GroupBFontCard key={font.class} font={font} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 pt-12 border-t border-neutral-900">
        <p className="text-center text-neutral-600 text-sm">
          Fonts served from <code className="text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">/public/english/</code> and{" "}
          <code className="text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">/public/arabic/</code>
        </p>
      </footer>
    </main>
  );
}

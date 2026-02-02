"use client";

import { useState } from "react";

// Font definitions
const englishFonts = [
  { name: "Cinzel", class: "font-cinzel", weight: "Regular & Bold" },
  { name: "Copperplate Gothic", class: "font-copperplate", weight: "Regular" },
  { name: "Copperplate Gothic Light", class: "font-copperplate-light", weight: "Light" },
  { name: "Julius Sans One", class: "font-julius", weight: "Regular" },
  { name: "Lemon Milk", class: "font-lemon", weight: "Regular & Bold" },
  { name: "Optimus Princeps", class: "font-optimus", weight: "Regular & SemiBold" },
  { name: "Trajan Pro", class: "font-trajan", weight: "Bold" },
];

const arabicFonts = [
  { name: "A Thuluth", class: "font-thuluth", weight: "Regular" },
  { name: "AM Thulth", class: "font-am-thulth", weight: "Regular" },
  { name: "KFGQPC Hafs", class: "font-hafs", weight: "Uthmanic Script" },
  { name: "KFGQPC Hafs Taweel", class: "font-hafs-taweel", weight: "Extended" },
  { name: "Lifta Black", class: "font-lifta-black", weight: "Black" },
  { name: "Lifta Swash", class: "font-lifta-swash", weight: "Regular" },
  { name: "Surah Name Diwani", class: "font-surah-diwani", weight: "Decorative" },
  { name: "Quraa Diwani", class: "font-quraa-diwani", weight: "Decorative" },
  { name: "Quraa Names", class: "font-quraa-names", weight: "Display" },
  { name: "Quraa Alharamayn", class: "font-quraa-alharamayn", weight: "Display" },
  { name: "Surah Ejazah", class: "font-surah-ejazah", weight: "Decorative" },
];

// Copy to clipboard function
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
      className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 
                 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20
                 text-neutral-400 hover:text-white backdrop-blur-sm"
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

// English Font Card
function EnglishFontCard({ font }: { font: typeof englishFonts[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 
                    border border-neutral-800 hover:border-neutral-700 transition-all duration-500
                    hover:shadow-2xl hover:shadow-neutral-900/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Font Name Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs font-medium uppercase tracking-widest 
                        bg-white/10 backdrop-blur-sm rounded-full text-neutral-400 border border-white/5">
          {font.name}
        </span>
      </div>

      {/* Weight Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] uppercase tracking-wider text-neutral-500">
          {font.weight}
        </span>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-8">
        <div className={`${font.class} text-4xl md:text-5xl lg:text-6xl text-center 
                        tracking-widest text-white/90 leading-tight`}>
          Elevate Your Edits
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-neutral-500 font-mono bg-neutral-900/50 px-3 py-1.5 rounded-lg">
          {font.class}
        </code>
        <CopyButton text={font.class} />
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}

// Arabic Font Card
function ArabicFontCard({ font }: { font: typeof arabicFonts[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 
                    border border-amber-900/30 hover:border-amber-800/50 transition-all duration-500
                    hover:shadow-2xl hover:shadow-amber-900/20">
      {/* Background Pattern - Islamic Geometric */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Font Name Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 text-xs font-medium uppercase tracking-widest 
                        bg-amber-500/10 backdrop-blur-sm rounded-full text-amber-400/80 border border-amber-500/20">
          {font.name}
        </span>
      </div>

      {/* Weight Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2 py-1 text-[10px] uppercase tracking-wider text-amber-600/60">
          {font.weight}
        </span>
      </div>

      {/* Main Content - Arabic Ayah */}
      <div className="pt-20 pb-8 px-8">
        <div 
          className={`${font.class} text-4xl md:text-5xl text-center leading-loose text-amber-50/90`}
          dir="rtl"
          style={{
            textShadow: '0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.15)'
          }}
        >
          وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ
        </div>
        <p className="text-center text-xs text-neutral-500 mt-4 tracking-wide">
          Surah Hud (11:88)
        </p>
      </div>

      {/* Footer */}
      <div className="px-8 pb-6 flex items-center justify-between">
        <code className="text-xs text-amber-600/60 font-mono bg-amber-900/20 px-3 py-1.5 rounded-lg border border-amber-800/20">
          {font.class}
        </code>
        <CopyButton text={font.class} />
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent" />
      </div>
    </div>
  );
}

export default function FontGallery() {
  return (
    <main className="min-h-screen bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 
                       bg-clip-text text-transparent mb-6 tracking-tight">
          Font Gallery
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          A curated collection of fonts for your Quran website. Click &quot;Copy Class&quot; to use any font in your code.
        </p>
      </div>

      {/* English Fonts Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
          <h2 className="text-2xl font-light text-neutral-300 tracking-widest uppercase">
            English Fonts
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {englishFonts.map((font) => (
            <EnglishFontCard key={font.class} font={font} />
          ))}
        </div>
      </section>

      {/* Arabic Fonts Section */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
          <h2 className="text-2xl font-light text-amber-200/80 tracking-widest uppercase">
            Arabic Fonts
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {arabicFonts.map((font) => (
            <ArabicFontCard key={font.class} font={font} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 pt-12 border-t border-neutral-900">
        <p className="text-center text-neutral-600 text-sm">
          Fonts are loaded from <code className="text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">/public/english</code> and{" "}
          <code className="text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">/public/arabic</code>
        </p>
      </footer>
    </main>
  );
}

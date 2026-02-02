import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
        Quran Website
      </h1>
      <p className="text-neutral-400 text-lg mb-12 text-center max-w-xl">
        A beautiful Quran website with custom Arabic and English fonts.
      </p>
      <Link
        href="/test-fonts"
        className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold 
                   rounded-xl hover:from-amber-500 hover:to-amber-400 transition-all duration-300 
                   shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40"
      >
        View Font Gallery
      </Link>
    </main>
  );
}

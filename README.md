# Quran Website

A beautiful Quran website with custom Arabic and English fonts.

## Features

- Custom Arabic fonts for displaying Quranic text
- Custom English fonts for elegant typography
- Visual Font Gallery at `/test-fonts`
- Modern Next.js 14 with App Router
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up fonts (run the PowerShell script):
```powershell
.\setup-fonts.ps1
```

Or manually copy fonts from `Public_Folder/English_Fonts` to `public/english` and `Public_Folder/Arabic_Fonts` to `public/arabic`.

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. Visit the font gallery at [http://localhost:3000/test-fonts](http://localhost:3000/test-fonts)

## Font Classes

### English Fonts
- `font-cinzel` - Cinzel (Regular & Bold)
- `font-copperplate` - Copperplate Gothic
- `font-copperplate-light` - Copperplate Gothic Light
- `font-julius` - Julius Sans One
- `font-lemon` - Lemon Milk
- `font-optimus` - Optimus Princeps
- `font-trajan` - Trajan Pro

### Arabic Fonts
- `font-thuluth` - A Thuluth
- `font-am-thulth` - AM Thulth
- `font-hafs` - KFGQPC Hafs Uthmanic Script
- `font-hafs-taweel` - KFGQPC Hafs Taweel
- `font-lifta-black` - Lifta Black
- `font-lifta-swash` - Lifta Swash
- `font-surah-diwani` - Surah Name Diwani
- `font-quraa-diwani` - Quraa Diwani
- `font-quraa-names` - Quraa Names
- `font-quraa-alharamayn` - Quraa Alharamayn
- `font-surah-ejazah` - Surah Ejazah

## Project Structure

```
quran_website/
├── app/
│   ├── globals.css          # Font declarations and global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── test-fonts/
│       └── page.tsx         # Font gallery page
├── public/
│   ├── english/             # English font files
│   └── arabic/              # Arabic font files
├── tailwind.config.ts       # Tailwind configuration
└── package.json            # Dependencies

```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## License

MIT

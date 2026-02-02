import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quran Website",
  description: "A beautiful Quran website with custom fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

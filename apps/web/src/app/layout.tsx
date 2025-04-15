import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uber XO – Multiplayer Tic Tac Toe",
  description:
    "A next-level multiplayer Tic Tac Toe experience. Built with AI, Next.js, Zustand & Turbo.",
  openGraph: {
    title: "Uber XO – Multiplayer Tic Tac Toe",
    description:
      "Play a strategic twist on Tic Tac Toe with friends. Online. Realtime. Clean UI.",
    url: "https://uberxo.vercel.app",
    siteName: "Uber XO",
    images: [
      {
        url: "https://uberxo.vercel.app/og-preview.png", // Add this image!
        width: 1200,
        height: 630,
        alt: "Uber XO Game Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uber XO – Multiplayer Tic Tac Toe",
    description:
      "Challenge your friends to a modern spin on Tic Tac Toe. Try it now!",
    images: ["https://uberxo.vercel.app/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Uber-XO" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <main className="flex-grow container mx-auto px-4 py-4">
          {children}
        </main>
      </body>
    </html>
  );
}

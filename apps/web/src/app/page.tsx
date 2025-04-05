"use client";

import GameBoard from "../components/Gameboard";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-100">
      <GameBoard />
    </main>
  );
}

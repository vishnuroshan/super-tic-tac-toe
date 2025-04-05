"use client";

import MiniBoard from "./MiniBoard";

export default function GameBoard() {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <MiniBoard key={i} />
      ))}
    </div>
  );
}

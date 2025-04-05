"use client";

import { useState } from "react";
import Cell from "./Cell";

export default function MiniBoard() {
  const [cells, setCells] = useState<(null | "X" | "O")[]>(Array(9).fill(null));
  const [current, setCurrent] = useState<"X" | "O">("X");

  const handleClick = (index: number) => {
    if (cells[index]) return;

    const newCells = [...cells];
    newCells[index] = current;
    setCells(newCells);
    setCurrent(current === "X" ? "O" : "X");
  };

  return (
    <div className="grid grid-cols-3 gap-1 border-2 border-black p-1">
      {cells.map((val, i) => (
        <Cell key={i} value={val} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}

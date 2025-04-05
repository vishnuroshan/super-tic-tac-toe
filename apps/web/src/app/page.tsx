"use client";

import { greet } from "@/game-core/index";

export default function HomePage() {
  return <>{greet("Super Tic Tac Toe")}</>;
}

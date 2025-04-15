"use client";

import { useEffect, useState } from "react";
import { GameContainer } from "../GameContainer";
import { WaitingRoom } from "./WaitingRoom";

export default function OnlineGameLoader({ roomCode }: { roomCode: string }) {
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setJoined(true);
    }, 2000); // Simulated "join"
    return () => clearTimeout(timer);
  }, []);

  if (!joined) return <WaitingRoom roomCode={roomCode} />;

  return <GameContainer mode="online" roomCode={roomCode} />;
}

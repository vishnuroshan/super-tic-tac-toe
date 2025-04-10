"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../Button";

export default function JoinRoom() {
  const [roomCode, setRoomCode] = useState("");
  const router = useRouter();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomCode || roomCode.length < 4) return;
    router.push(`/room/${roomCode.toUpperCase()}`);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center mt-6">
      <form onSubmit={handleJoin}>
        <input
          type="text"
          placeholder="Enter Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
          className="w-full mb-3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <Button label="join Room" type="submit" />
      </form>
    </div>
  );
}

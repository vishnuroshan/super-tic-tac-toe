"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createRoomCode } from "../../app/actions/createRoom";
import { Button } from "../Button";
import { Add } from "../icons/Add";

export default function CreateRoom() {
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const router = useRouter();

  const handleCreate = async () => {
    setCreating(true);
    const code = await createRoomCode();
    setRoomCode(code);
    setCreating(false);
  };

  if (roomCode) {
    return (
      <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-2">Room Created!</h2>
        <p className="text-gray-600 mb-4">Share this code with your friend:</p>
        <div className="mb-4 text-xl font-mono bg-white py-2 px-4 rounded-lg shadow-sm border inline-block">
          {roomCode}
        </div>
        <div className="flex justify-evenly items-center">
          <Button
            color="secondary"
            width="w-auto"
            label="Copy Code"
            onClick={() => navigator.clipboard.writeText(roomCode)}
          />
          <Button
            width="w-auto"
            label="Go to Game"
            onClick={() => router.push(`/room/${roomCode}`)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
      <Button
        iconLeft={creating ? null : <Add />}
        label={creating ? "Creating..." : "Create Room"}
        onClick={handleCreate}
      />
    </div>
  );
}

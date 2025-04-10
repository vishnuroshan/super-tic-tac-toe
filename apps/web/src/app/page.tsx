"use client";

import { useRouter } from "next/navigation";
import { Button } from "../components/Button";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Super Tic Tac Toe</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button
          label=" 🎮 Play"
          className="w-full text-lg py-6 rounded-2xl"
          onClick={() => router.push("/local")}
        />
        <Button
          label="🌐 Play Online"
          className="w-full text-lg py-6 rounded-2xl"
          onClick={() => router.push("/online")}
        />
      </div>
    </div>
  );
}

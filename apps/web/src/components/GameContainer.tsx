"use client";

import GameBoard from "./Gameboard";
import { GameControls } from "./GameControls";
import { GameInfo } from "./GameInfo";
import { ContentWrapper } from "./ContentWrapper";
import { GameMode } from "../types/game";
import { useSafeBeforeUnload } from "../hooks/useBeforeunload";
import { usePathname } from "next/navigation";

interface GameContainerProps {
  mode: GameMode;
  roomCode?: string;
}
export function GameContainer({ mode, roomCode }: GameContainerProps) {
  const pathname = usePathname();
  // Block unload when on /local or /room/[code]
  const shouldBlockUnload =
    pathname.startsWith("/local") || pathname.startsWith("/room");

  useSafeBeforeUnload(shouldBlockUnload);

  return (
    <ContentWrapper>
      <div className="w-full md:w-1/4">
        <GameInfo />
        <GameControls />
        {mode === "online" && roomCode && (
          <div
            className="mt-4 text-center text-sm text-gray-500 cursor-pointer group"
            onClick={() => {
              navigator.clipboard.writeText(roomCode);
              // TODO: add toaster message like “Copied to clipboard”
            }}
            title="Click to copy"
          >
            Room Code:&nbsp;
            <span className="font-mono text-base font-semibold text-blue-600 group-hover:underline">
              {roomCode}
            </span>
          </div>
        )}
      </div>
      <div className="w-full md:w-3/4">
        <GameBoard mode={mode} />
      </div>
    </ContentWrapper>
  );
}

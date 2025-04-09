"use client";

import GameBoard from "../components/Gameboard";
import { Info } from "../components/icons/Info";
import { IconButton } from "../components/IconButton";
import { Settings } from "../components/icons/Settings";
import { GameInfo } from "../components/GameInfo";
import { GameControls } from "../components/GameControls";
import { useState } from "react";
import { Rules } from "../components/dialogs/Rules";

export default function HomePage() {
  const [showRules, setShowRules] = useState<boolean>(false);

  return (
    <>
      {showRules && <Rules onClose={() => setShowRules(false)} />}
      <div className="min-h-screen flex flex-col">
        <header className="bg-gradient-to-r from-primary/90 via-primary to-secondary shadow-md py-3">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Super Tic Tac Toe</h1>
            <div className="flex items-center space-x-4">
              <IconButton icon={<Settings />} />
              <IconButton
                icon={<Info />}
                onClick={() => {
                  setShowRules(true);
                }}
              />
            </div>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4">
                <GameInfo />
                <GameControls />
              </div>
              <GameBoard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

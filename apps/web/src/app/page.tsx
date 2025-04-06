"use client";

import { useGameStore } from "@/game-core/gameStore";
import GameBoard from "../components/Gameboard";

export default function HomePage() {
  const { gameState, resetGame } = useGameStore();
  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-2 sticky top-0 z-10">
        <h1 className="text-3xl font-semibold text-center">
          Super Tic Tac Toe
        </h1>
      </nav>
      <main className="flex items-center justify-center min-h-screen bg-neutral-100 p-4">
        <div className="flex justify-between w-full max-w-screen-xl px-4 py-6">
          <section className="flex-1 flex justify-center">
            <GameBoard />
          </section>
          <section className="flex flex-col items-center justify-center ml-8 space-y-6">
            {/* Game status section */}
            <div className="text-xl font-semibold text-gray-800">
              <span>Current Player: </span>
              <span
                className={`${
                  gameState.currentPlayer === "X"
                    ? "text-blue-500"
                    : "text-red-500"
                }`}
              >
                {gameState.currentPlayer}
              </span>
            </div>

            <div className="text-lg font-semibold text-gray-800">
              Next Allowed Board:{" "}
              {typeof gameState.nextAllowedBoard === "number"
                ? gameState.nextAllowedBoard + 1
                : "All"}
            </div>

            {/* Winner or draw message */}
            {gameState.winner && (
              <div className="mt-2 text-lg font-bold text-green-500">
                {gameState.winner === "draw"
                  ? "It's a draw!"
                  : `Player ${gameState.winner} wins!`}
              </div>
            )}

            {/* Restart button */}
            <button
              onClick={() => resetGame()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              Restart Game
            </button>
          </section>
        </div>
      </main>
    </>
  );
}

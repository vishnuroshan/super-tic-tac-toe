import { useGameStore } from "@/game-core/gameStore";
import { PlayerCell } from "@/game-core/types";

export function PlayerIcon({ player }: { player: PlayerCell }) {
  let className = "";
  if (player === "X") {
    className = "bg-playerx";
  } else if (player === "O") {
    className = "bg-playero";
  }
  return (
    <div
      id="current-turn"
      className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${className}`}
    >
      {player ? player : ""}
    </div>
  );
}

export function GameInfo() {
  const { gameState, playerXWins, playerOWins, draws } = useGameStore();

  return (
    <div className="bg-white rounded shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Game Info</h2>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Current Turn</span>
          <PlayerIcon player={gameState.currentPlayer} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-2">
              <PlayerIcon player={"X"} />
            </div>
            <span className="font-medium">Player X</span>
          </div>
          <span id="score-x" className="text-lg font-bold">
            {playerXWins}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold mr-2">
              <PlayerIcon player={"O"} />
            </div>
            <span className="font-medium">Player O</span>
          </div>
          <span id="score-o" className="text-lg font-bold">
            {playerOWins}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">Draws</span>
          <span id="score-draws" className="text-lg font-bold">
            {draws}
          </span>
        </div>
      </div>
    </div>
  );
}

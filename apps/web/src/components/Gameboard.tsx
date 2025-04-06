import { createNewGame, handleMove, resetGame } from "@/game-core/gameLogic";
import { GameState } from "@/game-core/types";
import { useState } from "react";
import MiniBoard from "./MiniBoard";

export default function GameBoard() {
  const [gameState, setGameState] = useState<GameState>(createNewGame());

  const onCellClick = (miniBoardIndex: number, cellIndex: number) => {
    // You may want to add validations here based on nextAllowedBoard, etc.
    const newState = handleMove(gameState, miniBoardIndex, cellIndex);
    console.log(newState);
    setGameState(newState);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {gameState.boards.map((board, i) => (
          <MiniBoard
            status={gameState.boardStatus[i]}
            key={i}
            cells={board}
            onCellClick={(cellIndex: number) => onCellClick(i, cellIndex)}
          />
        ))}
      </div>
      {gameState.winner && (
        <div className="mt-4 text-red-600">
          {gameState.winner === "draw"
            ? "It's a draw!"
            : `Player ${gameState.winner} wins!`}
          <button onClick={() => setGameState(resetGame())}>Restart</button>
        </div>
      )}
    </div>
  );
}

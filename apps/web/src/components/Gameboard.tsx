import { useGameStore } from "@/game-core/gameStore";
import MiniBoard from "./MiniBoard";
import { MiniBoard as Board } from "@/game-core/types";
import { ReactNode } from "react";

export default function GameBoard() {
  const { gameState, handleStateMove } = useGameStore();

  const onCellClick = (
    miniBoardIndex: number,
    cellIndex: number,
    isBoardDisabled: boolean,
  ) => {
    handleStateMove(miniBoardIndex, cellIndex, isBoardDisabled);
  };

  const renderMiniBoard = (board: Board, i: number): ReactNode => {
    const isBoardDisabled =
      gameState.nextAllowedBoard !== null && gameState.nextAllowedBoard !== i;
    return (
      <div
        key={i}
        className="main-board relative bg-gray-50 p-2 rounded aspect-square"
      >
        <MiniBoard
          status={gameState.boardStatus[i]}
          cells={board}
          onCellClick={(cellIndex: number) =>
            onCellClick(i, cellIndex, isBoardDisabled)
          }
          disabled={isBoardDisabled}
        />
      </div>
    );
  };

  return (
    <div className="w-full md:w-3/4">
      <div className="bg-white rounded shadow-sm p-6 mb-4">
        <div id="game-status" className="text-center mb-6">
          <div className="text-lg font-semibold text-gray-800">
            {/* {`Player ${gameState.currentPlayer}'s turn`} */}
            Game Status
          </div>
          <div className="text-sm text-gray-500">
            {gameState.nextAllowedBoard === null
              ? `Select any cell to make your move`
              : `Select a cell in the highlighted
              board`}
          </div>
        </div>
        <div
          id="super-board"
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {gameState.boards.map(renderMiniBoard)}
        </div>
      </div>
    </div>
  );
}

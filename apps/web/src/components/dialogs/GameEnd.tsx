import { Trophy } from "../icons/Trophy";

export function GameEnd({
  winner,
  onClose,
}: {
  winner: string;
  onClose: () => void;
}) {
  return (
    <div
      id="game-end-modal"
      onClick={() => onClose()}
      className="fixed inset-0 bg-black/50  flex items-center justify-center z-50"
    >
      <div className="text-center bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between  items-center">
          <h1 className="w-full text-2xl font-bold mb-4">
            {winner === "draw" ? "It's a Draw!" : `Player ${winner} Won!`}
          </h1>
        </div>
        <div className="space-y-4">
          {winner !== "draw" && (
            <div className="m-auto">
              <Trophy className="m-auto" />
            </div>
          )}
          <h2 className="text-xl font-bold mb-4">
            {winner === "draw"
              ? "It's a Draw!"
              : `Congratulations, You Genius!`}
          </h2>
        </div>
        <div className="mt-6">
          <button
            onClick={() => onClose()}
            id="got-it-btn"
            className="py-2 px-4 bg-primary text-white font-medium rounded-button whitespace-nowrap"
          >
            Play Again!
          </button>
        </div>
      </div>
    </div>
  );
}

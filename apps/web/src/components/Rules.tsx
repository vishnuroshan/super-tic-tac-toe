import { IconButton } from "./IconButton";
import { Close } from "./icons/Close";

export function Rules({ onClose }: { onClose: () => void }) {
  return (
    <div
      id="rules-modal"
      onClick={() => onClose()}
      className="fixed inset-0 bg-black/50  flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">How to Play Super Tic Tac Toe</h2>
          <IconButton icon={<Close />} onClick={() => onClose} />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">The Big Picture</h3>
            <p>It’s a 3x3 grid of mini Tic Tac Toe boards.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Your turn</h3>
            <p>
              Play in any cell of your mini board. Your move decides which mini
              board your opponent must play next.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Board Full or Won?</h3>
            <p>
              If the target mini board is already won or completely filled
              (draw), your opponent can choose any mini board for their move.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Winning a Mini Board</h3>
            <p>
              Win a mini board by getting three in a row (diagonally or
              horizontally). That board becomes yours.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Win the Game</h3>
            <p>
              The first player to claim three mini boards in a row—horizontally,
              vertically, or diagonally—wins the game!
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => onClose()}
            id="got-it-btn"
            className="py-2 px-4 bg-primary text-white font-medium rounded-button whitespace-nowrap"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

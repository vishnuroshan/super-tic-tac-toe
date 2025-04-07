import { useGameStore } from "@/game-core/gameStore";
import { Button } from "./Button";
import { Refresh } from "./icons/Refresh";

export function GameControls() {
  const { resetGame } = useGameStore();

  return (
    <div className="bg-white rounded shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Game Controls</h2>

      <div className="space-y-3">
        <Button
          iconLeft=<Refresh />
          label="New Game"
          color="primary"
          onClick={() => resetGame()}
        />
      </div>
    </div>
  );
}

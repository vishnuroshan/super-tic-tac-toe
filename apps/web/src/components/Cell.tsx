import { PlayerCell } from "@/game-core/types";

type CellProps = {
  value: PlayerCell;
  onPlayerClick: () => void;
};

export default function Cell({ value, onPlayerClick }: CellProps) {
  return (
    <button
      onClick={onPlayerClick}
      className="cell flex items-center justify-center bg-white aspect-square text-2xl font-bold cursor-pointer hover:bg-gray-100"
    >
      <span className={value === "X" ? "text-playerx" : "text-playero"}>
        {value}
      </span>
    </button>
  );
}

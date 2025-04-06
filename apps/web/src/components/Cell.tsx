import { PlayerCell } from "@/game-core/types";

type CellProps = {
  value: PlayerCell;
  onPlayerClick: () => void;
};

export default function Cell({ value, onPlayerClick }: CellProps) {
  return (
    <button
      onClick={onPlayerClick}
      className="w-full h-12 border border-gray-400 text-2xl font-bold flex  aspect-square items-center justify-center hover:bg-gray-200 cursor-pointer"
    >
      <span className={value === "X" ? "text-blue-600" : "text-red-600"}>
        {value}
      </span>
    </button>
  );
}

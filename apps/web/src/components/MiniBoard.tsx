import Cell from "./Cell";
import { PlayerCell, MiniBoardStatus } from "@/game-core/types";

type MiniBoardProps = {
  cells: PlayerCell[];
  onCellClick: (index: number) => void;
  status?: MiniBoardStatus;
  disabled?: boolean;
};

export default function MiniBoard({
  cells,
  onCellClick,
  status,
  disabled = false,
}: MiniBoardProps) {
  let shadowClass = "border-none"; // default
  if (status === "won-X") {
    shadowClass = "border-2 border-playerx";
  } else if (status === "won-O") {
    shadowClass = "border-2 border-playero";
  }
  return (
    <div
      className={`game-board grid grid-cols-3 rounded gap-1 h-full shadow-lg ${shadowClass} ${disabled ? "opacity-30 cursor-not-allowed" : ""}`}
    >
      {cells.map((val, i) => (
        <Cell key={i} value={val} onPlayerClick={() => onCellClick(i)} />
      ))}
    </div>
  );
}

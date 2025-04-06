import Cell from "./Cell";
import { PlayerCell, MiniBoardStatus } from "@/game-core/types";

type MiniBoardProps = {
  cells: PlayerCell[];
  onCellClick: (index: number) => void;
  status?: MiniBoardStatus;
};

export default function MiniBoard({
  cells,
  onCellClick,
  status,
}: MiniBoardProps) {
  let shadowClass = "shadow-md"; // default
  if (status === "won-X") {
    shadowClass = "shadow-[0px_0px_12px_6px_#4299e1]";
  } else if (status === "won-O") {
    shadowClass = "shadow-[0px_0px_12px_6px_#f56565]";
  }
  return (
    <div
      className={`grid grid-cols-3 gap-1 p-1 border-2 rounded-md bg-gray-100 ${shadowClass}`}
    >
      {cells.map((val, i) => (
        <Cell key={i} value={val} onPlayerClick={() => onCellClick(i)} />
      ))}
    </div>
  );
}

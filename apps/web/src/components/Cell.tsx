"use client";

type CellProps = {
  value: "X" | "O" | null;
  onClick: () => void;
};

export default function Cell({ value, onClick }: CellProps) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 border border-gray-400 text-2xl font-bold flex items-center justify-center"
    >
      <span className={value === "X" ? "text-blue-600" : "text-red-600"}>
        {value}
      </span>
    </button>
  );
}

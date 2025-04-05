"use client";

type CellProps = {
  value: "X" | "O" | null;
  onClick: () => void;
};

export default function Cell({ value, onClick }: CellProps) {
  return (
    <button
      onClick={onClick}
      className="w-full h-12 border border-gray-400 text-2xl font-bold flex  aspect-square items-center justify-center hover:bg-gray-200 cursor-pointer"
    >
      <span className={value === "X" ? "text-blue-600" : "text-red-600"}>
        {value}
      </span>
    </button>
  );
}

import { ReactNode } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  color: "primary" | "secondary" | "white";
}
export function Button({
  label,
  iconLeft,
  iconRight,
  color,
  ...props
}: ButtonProps) {
  return (
    <button
      id="new-game-btn"
      className={`w-full py-2 bg-${color} text-${color === "white" ? "grey-700" : "white"} cursor-pointer font-medium rounded-button flex items-center justify-center whitespace-nowrap`}
      {...props}
    >
      {iconLeft && iconLeft}
      <p className="mx-4">{label}</p>
      {iconRight && iconRight}
    </button>
  );
}

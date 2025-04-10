import { ReactNode } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  width?: string;
  color?: string;
}
export function Button({
  label,
  iconLeft,
  iconRight,
  color,
  width,
  ...props
}: ButtonProps) {
  let className = `${width || "w-full"} py-2 cursor-pointer font-medium rounded-button flex items-center justify-center whitespace-nowrap`;
  const setTheme = (color: string) => {
    switch (color) {
      case "primary":
        className = `${className} bg-primary text-white`;
        break;
      case "secondary":
        className = `${className} bg-secondary text-white`;
        break;
      case "white":
        className = `${className} bg-white text-grey-700`;
        break;
      default:
        className = `${className} bg-primary text-white`;
        break;
    }
  };
  setTheme(color || "primary");

  return (
    <button id="new-game-btn" className={className} {...props}>
      {iconLeft && iconLeft}
      <p className="mx-4">{label}</p>
      {iconRight && iconRight}
    </button>
  );
}

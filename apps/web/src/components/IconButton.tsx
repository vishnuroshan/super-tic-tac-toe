import { ReactNode } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 bg-white/10 transition-colors duration-200"
      type="button"
    >
      {icon}
    </button>
  );
}

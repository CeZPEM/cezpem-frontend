import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 font-archivo rounded-lg flex items-center border transition-all ${
        variant === "primary"
          ? "bg-red hover:bg-darkRed text-white border-black"
          : "bg-white hover:bg-gray-100 text-red border-black"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

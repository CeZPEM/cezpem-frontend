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
  const variantClasses =
    variant === "primary"
      ? "bg-red text-white border-black"
      : "bg-white text-red border-black";

  return (
    <button
      className={`px-4 py-2 rounded-lg flex items-center border hover:opacity-80 transition ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

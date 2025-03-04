import { classNames } from "@/functions";
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
      className={classNames(
        "relative px-4 py-2 font-archivo rounded-lg flex items-center justify-center border overflow-hidden transition-all",
        "before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:transition-all before:duration-[450ms] hover:before:w-full",
        variant === "primary"
          ? "before:bg-white bg-red text-white border-black hover:text-red"
          : "before:bg-red bg-white text-red border-black hover:text-white",
        className || ""
      )}
      {...props}
    >
      <span className="w-full relative z-10">{children}</span>
    </button>
  );
}

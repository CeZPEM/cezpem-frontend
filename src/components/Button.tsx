import { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  className,

  ...props
}: {
  children: React.ReactNode;
  className?: string;

  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <button
      className={`bg-red text-white px-4 py-2 rounded-lg flex items-center border border-black hover:opacity-80 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

"use client";

import { menuItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  className?: string;
  variant: "white" | "red";
};

export default function Navbar({ className = "", variant }: NavbarProps) {
  const pathname = usePathname();

  const textColorByVariant =
    variant === "red"
      ? "text-black hover:text-red"
      : "text-white hover:font-extrabold";
  const activeColorByVariant = variant === "red" ? "!text-red" : "";

  return (
    <nav
      className={`flex flex-1 gap-y-3 gap-6 flex-wrap justify-center md:justify-between md:text-base ${
        className || ""
      }`}
    >
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`underline text-24px lg:no-underline hover:underline ${
            pathname === item.href
              ? `font-extrabold ${activeColorByVariant}`
              : ""
          } ${textColorByVariant}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

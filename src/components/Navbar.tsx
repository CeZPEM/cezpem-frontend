"use client";

import { menuItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ className = "" }: { className?: string }) {
  const pathname = usePathname();

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
            pathname === item.href ? "font-extrabold" : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

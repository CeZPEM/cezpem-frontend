"use client";

import { menuItems } from "@/constants";
import { scrollSmoothlyTo } from "@/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  className?: string;
  variant: "white" | "red";
};

export default function Navbar({ className = "", variant }: NavbarProps) {
  const pathname = usePathname();

  const textColorByVariant =
    variant === "red" ? "text-black hover:text-red" : "text-white";
  const activeColorByVariant = variant === "red" ? "!text-red" : "";

  const isNotHome = pathname !== "/";

  return (
    <nav
      className={`flex flex-1 px-3 gap-y-3 gap-x-0 xl:gap-x-12 mx-auto w-full max-w-[576px] justify-between md:text-base ${
        className || ""
      }`}
    >
      {menuItems.map((item) => {
        const newLink = item.href.replace("/", "") || "inicio";
        return (
          <Link
            key={item.label}
            href={`/#${newLink}`}
            className={`group text-24px text-nowrap lg:no-underline ${
              // pathname === item.href
              pathname === item.label
                ? `font-extrabold ${activeColorByVariant}`
                : ""
            } ${textColorByVariant}`}
            onClick={(e) => {
              if (isNotHome) return;
              e.preventDefault();
              scrollSmoothlyTo(`#${newLink}`);
            }}
          >
            {item.released ? (
              <span
                className={
                  "tracking-normal group-hover:tracking-[-0.020em;] hover:font-semibold"
                }
              >
                {item.label}
              </span>
            ) : (
              <div className="text-center min-w-none lg:min-w-28">
                <span className="group-hover:hidden">{item.label}</span>
                <span className="hidden group-hover:block font-semibold">
                  Em breve
                </span>
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

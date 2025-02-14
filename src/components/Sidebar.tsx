"use client";

import { menuItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { CezpemLogoText } from "./Logos";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-72 bg-white shadow transition-transform duration-300 z-30 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header with Logo and Toggle */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <CezpemLogoText className="w-36" />
        </div>
        <button onClick={() => setIsOpen(false)} className="p-2">
          <FiArrowLeft size={24} />
        </button>
      </div>

      {/* Menu de Navegação */}
      {isOpen && (
        <nav>
          <ul className="space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block p-2 rounded hover:bg-gray-200 ${
                    pathname === item.href ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}

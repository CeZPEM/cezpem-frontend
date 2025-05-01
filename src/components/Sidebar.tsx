"use client";

import { menuItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { CezpemLogoText } from "./Logos";
import { scrollSmoothlyTo } from "@/functions";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  const isNotHome = pathname !== "/";

  return (
    <aside
      aria-hidden={isOpen?"false":"true"}
      className={`fixed top-0 left-0 h-full w-72 bg-white shadow transition-transform duration-300 z-[55] transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header com Logo e Botão de Fechar */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <CezpemLogoText className="w-36" />
        </div>
        <button onClick={() => setIsOpen(false)} className="p-2 text-red-600">
          <span className="sr-only">Fechar Menu</span>
          <FiArrowLeft aria-hidden="true" size={24} />
        </button>
      </div>

      {/* Menu de Navegação */}
      {isOpen && (
        
          <ul className="space-y-2 p-4">
            {menuItems.map((item) => {
              const newLink = item.href.replace("/", "") || "inicio";

              return (
                <li key={item.label}>
                  <Link
                    href={`/#${newLink}`}
                    onClick={(e) => {
                      setIsOpen(false);

                      if (isNotHome) return;
                      e.preventDefault();
                      scrollSmoothlyTo(`#${newLink}`);
                    }}
                    className={`block p-2 rounded transition-colors duration-200 text-20px
                    ${
                      // pathname === item.href
                      pathname === item.label
                        ? "bg-red/10 text-darkRed font-extrabold"
                        : "hover:bg-red/10 hover:text-darkRed"
                    }
                  `}
                  >
                    {item.label}
                    {item.released ? null : (
                      <span className="ml-2 text-md">(Em breve)</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        
      )}
    </aside>
  );
}

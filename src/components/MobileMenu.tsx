"use client";

import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav role="navigation" aria-label="Menu Principal">
      {/* Botão para abrir o Sidebar */}
      <button

        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen?"true":"false"}
        className="fixed right-5 top-4 lg:hidden z-[51] p-2 bg-white shadow-lg rounded-lg"
      >
        <span className="sr-only">Abrir Menu</span>
        <FiMenu aria-hidden="true" size={28} />
      </button>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Overlay para fechar o Sidebar ao clicar fora */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-[52]"
        />
      )}
    </nav>
  );
}

"use client";

import { Button } from "./Button";
import { IconStar } from "./Icons";
import Navbar from "./Navbar";
import { CezpemLogoText } from "./Logos";
import Container from "./Container";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <Container className="relative !py-0">
        <div className="mx-auto flex flex-col md:flex-row md:gap-5 justify-between items-center py-3">
          <div className="w-full max-w-48">
            <Link
              href="/"
              className="flex mr-auto ml-0 items-center justify-center"
            >
              <CezpemLogoText className="w-48 mr-auto" />
            </Link>
          </div>

          {/* Botão para abrir o Sidebar */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute right-7 top-6 md:hidden"
          >
            <FiMenu size={28} />
          </button>

          <Navbar variant="red" className="hidden md:flex" />

          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="w-full max-w-48">
            <Link
              target="_blank"
              href="http://apoia.se/cezpem"
              className="hidden md:block"
            >
              <Button className="flex items-center gap-2 mt-4 md:mt-0">
                <IconStar />
                Apoie o projeto!
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Overlay para fechar o Sidebar ao clicar fora */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-20"
        />
      )}
    </header>
  );
}

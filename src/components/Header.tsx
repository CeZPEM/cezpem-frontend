"use client";

import { Button } from "./Button";
import Navbar from "./Navbar";
import { CezpemLogoText } from "./Logos";
import Container from "./Container";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir o Sidebar */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-5 top-4 md:hidden z-[51] p-2 bg-white shadow-lg rounded-lg"
      >
        <FiMenu size={28} />
      </button>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <header className="bg-white shadow-md relative z-50">
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

            <Navbar variant="red" className="hidden md:flex" />

            <div className="w-full max-w-48">
              <Link
                target="_blank"
                href="http://apoia.se/cezpem"
                className="hidden md:flex group"
              >
                <Button className="w-full mt-4 md:mt-0">
                  <span className="flex flex-row w-full mx-auto text-center items-center gap-2">
                    <IoMdStar
                      className="group-hover:rotate-[216deg] transition-all duration-300 ease-in-out"
                      size={24}
                    />
                    Apoie o projeto!
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Overlay para fechar o Sidebar ao clicar fora */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-[52]"
        />
      )}
    </>
  );
}

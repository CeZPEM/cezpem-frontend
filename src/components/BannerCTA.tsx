"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const banners = [
  "https://placehold.co/1920x443/png?text=Banner-1",
  "https://placehold.co/1920x443/png?text=Banner-2",
  "https://placehold.co/1920x443/png?text=Banner-3",
];

export default function BannerCTA() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-44 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
      {/* Imagem do Banner */}
      <Image
        src={banners[current]}
        alt="Banner"
        className="w-full h-full object-cover transition-opacity duration-700"
        width={1920}
        height={443}
        priority
      />

      {/* Botão Esquerdo */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        onClick={prevSlide}
      >
        <AiOutlineLeft size={24} />
      </button>

      {/* Botão Direito */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        onClick={nextSlide}
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  );
}

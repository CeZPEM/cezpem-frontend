"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";

const banners = [
  "https://placehold.co/1920x443/png?text=Banner-1",
  "https://placehold.co/1920x443/png?text=Banner-2",
  "https://placehold.co/1920x443/png?text=Banner-3",
];

export default function BannerCTA() {
  return (
    <div className="relative w-full h-44 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
      {/* Swiper Carrossel */}
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ nextEl: "#next-banner", prevEl: "#prev-banner" }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
              width={1920}
              height={443}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botão Esquerdo */}
      <button
        id="prev-banner"
        className="absolute left-4 top-1/2 -translate-y-1/2 border border-gray-400 bg-black bg-opacity-20 md:bg-opacity-40 text-white p-2 rounded-full z-10 hover:bg-opacity-80 transition"
      >
        <AiOutlineLeft size={24} />
      </button>

      {/* Botão Direito */}
      <button
        id="next-banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 border border-gray-400 bg-black bg-opacity-20 md:bg-opacity-40 text-white p-2 rounded-full z-10 hover:bg-opacity-80 transition"
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BannerImage from "./BannerImage";
import "swiper/css";
import "swiper/css/navigation";

const banners = [
  "https://placehold.co/1920x443/png?text=Banner-1",
  "https://placehold.co/1920x443/png?text=Banner-2",
  "https://placehold.co/1920x443/png?text=Banner-3",
];

export default function BannerCTA() {
  return (
    <div className="relative w-full overflow-hidden">
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
          <SwiperSlide key={`${src}-${index}`} className="w-full h-full">
            <BannerImage
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
        className="absolute z-10 w-8 h-8 md:w-auto md:h-auto p-0 md:p-2 left-4 top-1/2 -translate-y-1/2 flex justify-center items-center border border-gray-400 bg-black bg-opacity-20 md:bg-opacity-40 text-white rounded-full hover:bg-opacity-80 transition"
      >
        <FaChevronLeft className="w-full" size={20} />
      </button>

      {/* Botão Direito */}
      <button
        id="next-banner"
        className="absolute z-10 w-8 h-8 md:w-auto md:h-auto p-0 md:p-2 right-4 top-1/2 -translate-y-1/2 flex justify-center items-center border border-gray-400 bg-black bg-opacity-20 md:bg-opacity-40 text-white rounded-full hover:bg-opacity-80 transition"
      >
        <FaChevronRight className="w-full" size={20} />
      </button>
    </div>
  );
}

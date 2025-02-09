import { CourseSimple } from "@/types";
import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type FeaturedCoursesCarouselProps = {
  courses: CourseSimple[];
};

export default function FeaturedCoursesCarousel({
  courses,
}: FeaturedCoursesCarouselProps) {
  if (!courses?.length) return null;

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-80 transition"
        id="prev-button"
      >
        <FaChevronLeft size={20} />
      </button>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
          1920: { slidesPerView: 6 },
          2560: { slidesPerView: 7 },
        }}
        navigation={{
          nextEl: "#next-button",
          prevEl: "#prev-button",
        }}
        modules={[Navigation]}
        className="w-full"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseCard
              course={course}
              textVariant="white"
              bgVariant="transparent"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-80 transition"
        id="next-button"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}

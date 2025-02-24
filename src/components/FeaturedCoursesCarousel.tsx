"use client";

import { useCallback, useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { CourseItem } from "@/types";
import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "./Container";
import { PageTitle } from "./PageTitle";
import CourseService from "@/services/courseService";

type FeaturedCoursesCarouselProps = {
  courses?: CourseItem[];
};

export default function FeaturedCoursesCarousel({
  courses = [],
}: FeaturedCoursesCarouselProps) {
  const [featuredCourses, setFeaturedCourses] = useState<CourseItem[]>(courses);

  const fetchFeaturedCourses = useCallback(async () => {
    const response = await CourseService.getCourses({
      "filters[featured][$eq]": "true",
      "populate[1]": "course_area",
      "populate[2]": "course_categories",
      "populate[3]": "course_instructors",
      limit: "6",
    });

    const coursesArr = response.data;

    while (coursesArr.length < 6) {
      coursesArr.push(coursesArr[0]);
    }

    setFeaturedCourses(coursesArr);
  }, []);

  useEffect(() => {
    fetchFeaturedCourses();
  }, [fetchFeaturedCourses]);

  if (!featuredCourses?.length) return null;

  return (
    <div className="w-full flex flex-col gap-2 py-8 md:py-12">
      <Container className="!py-0">
        <PageTitle className="text-white">Destaques</PageTitle>
      </Container>

      <div className="relative w-full">
        <button
          className="absolute z-10 w-8 h-8 md:w-auto md:h-auto p-0 md:p-2 left-4 top-1/2 -translate-y-1/2 flex justify-center items-center border border-gray-400 bg-black bg-opacity-20 md:bg-opacity-40 text-white rounded-full hover:bg-opacity-80 transition"
          id="prev-button"
        >
          <FaChevronLeft size={20} />
        </button>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={24}
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
          {featuredCourses.map((course, index) => (
            <SwiperSlide className="pb-3" key={index}>
              <CourseCard
                course={course}
                textVariant="white"
                bgVariant="transparent"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute z-10 w-8 h-8 md:w-auto md:h-auto p-0 md:p-2 right-4 top-1/2 -translate-y-1/2 flex justify-center items-center border border-gray-400 bg-black bg-opacity-20 md:bg-opacity-40 text-white rounded-full hover:bg-opacity-80 transition"
          id="next-button"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

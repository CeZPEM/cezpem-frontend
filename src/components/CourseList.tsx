import { CourseSimple } from "@/types";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";

type CourseListProps = {
  courses: CourseSimple[];
};

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="w-full mx-auto">
      <div className="w-full flex flex-row flex-wrap gap-2 md:gap-8 items-center justify-center md:justify-between mt-16">
        <div className="flex-0 md:w-3/2 mx-auto md:ml-0">
          <h2 className="leading-none text-40px font-bold text-black">
            Todos os cursos
          </h2>
          <p className="font-archivo text-15px text-gray-600">
            Encontre seu curso/professor dentro da sua respectiva área do
            conhecimento, ou use nossa ferramenta de busca.
          </p>
        </div>

        <div className="flex-1 md:w-1/3">
          <SearchBar />
        </div>
      </div>

      <div className="my-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            bgVariant="white"
            textVariant="black"
            showCta
          />
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="px-7 font-petrona text-24px py-2 border border-black rounded-lg text-black bg-white hover:bg-gray-200 transition">
          Mostrar mais cursos
        </button>
      </div>
    </div>
  );
}

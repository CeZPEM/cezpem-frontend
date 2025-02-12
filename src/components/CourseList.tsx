import { CourseSimple } from "@/types";
import CourseCard from "./CourseCard";

type CourseListProps = {
  courses: CourseSimple[];
};

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black">Todos os cursos</h2>
        <p className="text-lg text-gray-600">
          Encontre seu curso/professor dentro da sua respectiva área do
          conhecimento, ou use nossa ferramenta de busca.
        </p>
      </div>

      <div className="my-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16">
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

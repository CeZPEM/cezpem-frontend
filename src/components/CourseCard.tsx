/* eslint-disable @next/next/no-img-element */
import { CourseCardProps } from "@/types";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { Button } from "./Button";

export default function CourseCard({
  course,
  showCta,
  bgVariant = "white",
  textVariant = "black",
}: CourseCardProps) {
  const { title, teacher, description, image, semester, classType } = course;

  return (
    <div
      className={`group py-6 rounded-lg hover:shadow-xl transition-all border-2 border-transparent ${
        bgVariant === "white" ? "hover:!border-red" : ""
      } ${
        ["red", "transparent"].includes(bgVariant) ? "hover:!border-white/30" : ""
      }`}
      title={`Curso: ${title}`}
    >
      {/* Course Image */}
      <div className="relative">
        <div className="rounded-t-lg overflow-hidden">
          <img src={image} alt={title} className="w-full object-cover" />
        </div>

        {/* Semester and Class Type Labels */}
        <div className="absolute w-full -top-4 left-0 flex justify-between">
          <div className="ml-auto flex items-center font-archivo text-15px gap-2 bg-lightBlue text-white px-3 py-1 rounded-md shadow">
            <FaChalkboardTeacher size={18} /> {semester}
          </div>
          <div className="mx-auto flex items-center font-archivo text-15px gap-2 bg-lightBlue text-white px-3 py-1 rounded-md shadow">
            <FaUsers size={18} /> {classType}
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="flex flex-col px-4 mt-3 gap-2">
        <div
          className={`w-full gap-4 ${
            textVariant === "white" ? "text-white" : "text-black"
          }`}
        >
          <h2 className="text-l font-archivo font-24px font-bold">{title}</h2>
          <p
            className={`font-petrona text-15px font-semibold ${
              textVariant === "white" ? "text-white" : "text-red"
            }`}
          >
            {teacher}
          </p>
          <p className="font-archivo text-15px">{description}</p>
        </div>

        {/* Enroll Button */}
        {showCta && (
          <Button
            // Definindo a variante padrão e sobrescrevendo no hover via group-hover:
            variant="secondary"
            className="
              font-archivo font-bold font-16px w-auto mr-auto -mb-11 !py-1
              group-hover:!bg-red group-hover:!text-white group-hover:!shadow-xl"
          >
            Inscreva-se
          </Button>
        )}
      </div>
    </div>
  );
}

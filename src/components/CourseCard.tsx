/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { CourseCardProps } from "@/types";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { Button } from "./Button";

export default function CourseCard({
  course,
  showCta,
  bgVariant = "white",
  textVariant = "black",
}: CourseCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { title, teacher, description, image, semester, classType } = course;

  return (
    <div
      className={`py-6 rounded-lg shadow transition-all border-2 border-transparent ${
        !isActive && isHovered && bgVariant === "white" ? "!border-red/30" : ""
      } ${isActive ? "!border-red" : ""}`}
      tabIndex={0}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Image */}
      <div className="relative">
        <div className="rounded-t-lg overflow-hidden">
          <img src={image} alt={title} className="w-full object-cover" />
        </div>

        {/* Semester and Class Type Labels */}
        <div className="absolute -top-4 left-4 flex gap-2">
          <div className="flex items-center font-archivo font-16px gap-2 bg-lightBlue text-white px-3 py-1 rounded-md shadow">
            <FaChalkboardTeacher size={18} /> {semester}
          </div>
          <div className="flex items-center font-archivo font-16px gap-2 bg-lightBlue text-white px-3 py-1 rounded-md shadow">
            <FaUsers size={18} /> {classType}
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className={`flex flex-col px-4 mt-3 gap-2`}>
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

        {/* Enroll Button - Hover só funciona se isActive for false */}
        {showCta && (
          <Button
            variant={isActive || isHovered ? "primary" : "secondary"}
            className="font-archivo font-bold font-16px w-auto mr-auto -mb-11 !py-1"
          >
            Inscreva-se
          </Button>
        )}
      </div>
    </div>
  );
}

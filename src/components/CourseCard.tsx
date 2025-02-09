/* eslint-disable @next/next/no-img-element */
import { CourseCardProps } from "@/types";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { Button } from "./Button";

const getBgColor = (variant: string) => {
  switch (variant) {
    case "red":
      return "bg-red text-white";
    case "transparent":
      return "bg-transparent";
    default:
      return "bg-white";
  }
};

const getTextColor = (variant: string) => {
  switch (variant) {
    case "white":
      return "text-white";
    case "red":
      return "text-red";
    default:
      return "text-black";
  }
};

export default function CourseCard({
  course,
  showCta,
  bgVariant = "white",
  textVariant = "black",
}: CourseCardProps) {
  const variantColor = getBgColor(bgVariant);

  const { title, teacher, description, image, semester, classType } = course;

  return (
    <div className={`pb-6 rounded-lg shadow-lg ${variantColor}`}>
      {/* Course Image */}
      <div className="relative">
        <div className="rounded-t-lg overflow-hidden">
          <img src={image} alt={title} className="w-full object-cover" />
        </div>

        {/* Semester and Class Type Labels */}
        <div className="absolute -top-4 left-4 flex gap-2">
          <div className="flex items-center gap-1 bg-lightBlue text-white px-3 py-1 rounded-md shadow">
            <FaChalkboardTeacher /> {semester}
          </div>
          <div className="flex items-center gap-1 bg-lightBlue text-white px-3 py-1 rounded-md shadow">
            <FaUsers /> {classType}
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div
        className={`flex flex-col px-6 mt-6 gap-2 ${getTextColor(textVariant)}`}
      >
        <div className="w-full">
          <h2 className="text-lg font-bold">{title}</h2>
          <p
            className={`font-semibold ${
              textVariant === "white" ? "text-white" : "text-red"
            }`}
          >
            {teacher}
          </p>
          <p className="text-sm mt-2">{description}</p>
        </div>

        {/* Enroll Button (only in Red variant) */}
        {showCta && (
          <Button className="w-auto mr-auto -mb-11 !py-1">Inscreva-se</Button>
        )}
      </div>
    </div>
  );
}

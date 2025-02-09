export type CourseSimple = {
  id: number;
  title: string;
  teacher: string;
  description: string;
  image: string;
  semester: string;
  classType: string;
};

export type CourseCardProps = {
  course: CourseSimple;
  showCta?: boolean;
  bgVariant?: "white" | "red" | "transparent";
  textVariant?: "white" | "black" | "red";
};

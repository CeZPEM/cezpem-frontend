/*
const CourseResponse = {
  data: [
    {
      id: 9,
      documentId: "tnw1pffvhx55o7lwzq2oeykz",
      title: "Curso de Inglês Intermediário",
      createdAt: "2025-02-23T21:27:23.653Z",
      updatedAt: "2025-02-23T22:46:25.536Z",
      publishedAt: "2025-02-23T22:46:25.624Z",
      locale: "en",
      slug: "curso-ingles-intermediario",
      description:
        "Curso completo para estudantes de nível intermediário, abordando gramática, vocabulário e conversação.",
      active: true,
      featured: true,
      duration_hours: 60,
      duration_period_label: "semestres",
      duration_period_value: 2,
      course_area: {
        id: 2,
        documentId: "qr59a2qhxs99md15j3fr9jmg",
        name: "Linguagens e suas Tecnologias",
        slug: "linguagens-tecnologias",
        description: null,
        createdAt: "2025-02-23T20:44:45.402Z",
        updatedAt: "2025-02-23T20:44:45.402Z",
        publishedAt: "2025-02-23T20:44:45.447Z",
        locale: "en",
      },
      course_categories: [
        {
          id: 2,
          documentId: "xzycc96jzn96vyxl5jzn26ei",
          name: "Inglês",
          slug: "ingles",
          createdAt: "2025-02-23T20:56:45.918Z",
          updatedAt: "2025-02-23T20:56:45.918Z",
          publishedAt: "2025-02-23T20:56:45.958Z",
          locale: "en",
        },
      ],
      course_instructors: [
        {
          id: 2,
          documentId: "u8eji8n6q8hocf6owos9g4w8",
          name: "Nome do Professor de Exemplo",
          active: true,
          createdAt: "2025-02-23T21:57:39.864Z",
          updatedAt: "2025-02-23T21:57:39.864Z",
          publishedAt: "2025-02-23T21:57:39.905Z",
        },
      ],
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
};
*/

export type CourseItem = {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  featured: boolean;
  slug: string;
  cover: string;
  description: string;
  description_short: string;
  active: boolean;
  duration_hours: number;
  duration_period_label: string;
  duration_period_value: number;
  modality: string;
  course_instructors: {
    id: number;
    documentId: string;
    name: string;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
  }[];
  course_area: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
  course_categories: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  }[];
};

export type CourseCardProps = {
  course: CourseItem;
  showCta?: boolean;
  bgVariant?: "white" | "red" | "transparent";
  textVariant?: "white" | "black" | "red";
};

export type FaqItem = {
  id: number;
  documentId: string;
  title: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type FaqResponse = {
  data: FaqItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type CourseResponse = {
  data: CourseItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

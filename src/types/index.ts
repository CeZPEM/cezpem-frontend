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

/*
const FaqResponse = {
  data: [
    {
      id: 2,
      documentId: "op7yq369e1z7vpcy6eb0jqvk",
      title: "Como funcionam as aulas no CeZPEM?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Os cursos são oferecidos online em duas modalidades:",
              type: "text",
            },
          ],
        },
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  text: "Individual: R$240,00 por mês (com opção de meia-entrada).",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  text: "Turma: R$50,00 por mês (com opção de meia-entrada).",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Há também a modalidade de valor social (R$5,00/mês) para alunos que comprovem necessidade, com vagas limitadas para garantir o pagamento mínimo ao professor. As inscrições e detalhes dos cursos estão disponíveis no site, e o CeZPEM atua apenas como intermediário, enquanto a cobrança e a execução das aulas são realizadas diretamente entre professores e alunos.",
              type: "text",
            },
          ],
        },
      ],
      createdAt: "2025-02-19T23:17:51.362Z",
      updatedAt: "2025-02-19T23:17:51.362Z",
      publishedAt: "2025-02-19T23:17:51.570Z",
    },

    {
      id: 8,
      documentId: "g8h4wywnydknnk4tyn902m4g",
      title: "Como o CeZPEM se mantém?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "O projeto é sustentado pelas contribuições dos professores – que recebem pelos cursos que ministram – e por financiamento coletivo, por meio da plataforma ",
              type: "text",
            },
            {
              url: "http://apoia.se/cezpem",
              type: "link",
              children: [
                {
                  text: "Apoia.se.",
                  type: "text",
                },
              ],
            },
            {
              text: "",
              type: "text",
            },
          ],
        },
      ],
      createdAt: "2025-02-19T23:52:48.509Z",
      updatedAt: "2025-02-19T23:53:50.221Z",
      publishedAt: "2025-02-19T23:53:50.257Z",
      area: {
        id: 10,
        documentId: "ho8deftfrhlvfyabp1y71d1s",
        name: "sobre",
        createdAt: "2025-02-19T22:45:13.691Z",
        updatedAt: "2025-02-19T22:45:13.691Z",
        publishedAt: "2025-02-19T22:45:13.712Z",
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
};
*/

export type FaqItemChild = {
  type: "text" | "link";
  text: string;
  url: string;
  children: FaqItemChild[];
};

export type FaqAnswer = {
  type: "paragraph" | "list";
  format?: "ordered" | "unordered";
  children: FaqItemChild[];
};

export type FaqItem = {
  id: number;
  documentId: string;
  title: string;
  answer: FaqAnswer[];
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

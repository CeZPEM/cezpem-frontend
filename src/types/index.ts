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
      id: 17,
      documentId: "g8h4wywnydknnk4tyn902m4g",
      title: "Como o CeZPEM se mantém?",
      answer:
        "O projeto é sustentado pelas contribuições dos professores, que recebem pelas aulas ministradas, e por financiamento coletivo por meio da plataforma [Apoia.se](http://apoia.se/cezpem).",
      createdAt: "2025-02-19T23:52:48.509Z",
      updatedAt: "2025-02-23T19:28:09.928Z",
      publishedAt: "2025-02-23T19:28:10.067Z",
      order: 3,
      area: {
        id: 10,
        documentId: "ho8deftfrhlvfyabp1y71d1s",
        name: "sobre",
        createdAt: "2025-02-19T22:45:13.691Z",
        updatedAt: "2025-02-19T22:45:13.691Z",
        publishedAt: "2025-02-19T22:45:13.712Z",
      },
    },
    {
      id: 18,
      documentId: "jmld05tl47op6tt3ossvuagm",
      title: "Sou trabalhador da educação, como posso participar?",
      answer:
        "Inscreva-se através do formulário disponível no site.\nPara participar da nossa comunidade, é necessário ter uma conta no Discord, onde concentramos todas as nossas atividades.\n",
      createdAt: "2025-02-19T23:51:28.005Z",
      updatedAt: "2025-02-23T19:28:45.324Z",
      publishedAt: "2025-02-23T19:28:45.358Z",
      order: 2,
      area: {
        id: 10,
        documentId: "ho8deftfrhlvfyabp1y71d1s",
        name: "sobre",
        createdAt: "2025-02-19T22:45:13.691Z",
        updatedAt: "2025-02-19T22:45:13.691Z",
        publishedAt: "2025-02-19T22:45:13.712Z",
      },
    },
    {
      id: 19,
      documentId: "th2b90pojzs3l9evsuuh3lyv",
      title: "Sou trabalhador de outras áreas, como posso participar?",
      answer:
        "Independentemente da sua área, se você deseja contribuir com a construção do CeZPEM, inscreva-se no nosso banco de recrutamento através do formulário.\nFazemos chamadas conforme as necessidades do projeto vão surgindo.\n",
      createdAt: "2025-02-20T00:20:38.951Z",
      updatedAt: "2025-02-23T19:29:17.392Z",
      publishedAt: "2025-02-23T19:29:17.420Z",
      order: 4,
      area: {
        id: 10,
        documentId: "ho8deftfrhlvfyabp1y71d1s",
        name: "sobre",
        createdAt: "2025-02-19T22:45:13.691Z",
        updatedAt: "2025-02-19T22:45:13.691Z",
        publishedAt: "2025-02-19T22:45:13.712Z",
      },
    },
    {
      id: 16,
      documentId: "op7yq369e1z7vpcy6eb0jqvk",
      title: "Como funcionam as aulas no CeZPEM?",
      answer:
        "**Os cursos são oferecidos online em duas modalidades:**\n- **Individual:** R$240,00 por mês (com opção de meia-entrada);\n- **Turma:** R$50,00 por mês (com opção de meia-entrada).\n\n**Há também a modalidade de valor social:** R$5,00 por mês, para alunos que comprovem condição socioeconômica, com vagas limitadas para garantir o pagamento mínimo ao professor.\n\n**As inscrições e detalhes dos cursos estão disponíveis no site.**  \n**O CeZPEM atua como intermediário, enquanto o pagamento e a execução das aulas são realizados diretamente entre professores e alunos.**",
      createdAt: "2025-02-19T23:17:51.362Z",
      updatedAt: "2025-02-23T19:26:48.176Z",
      publishedAt: "2025-02-23T19:26:48.203Z",
      order: 1,
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
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 4 } },
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

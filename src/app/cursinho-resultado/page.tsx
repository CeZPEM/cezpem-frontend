import { PageTitle } from "@/app/(home)/components/PageTitle";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Image from "next/image";

const studentsList = [
  "Ana Clara Souza",
  "Carla Pereira da Silva",
  "Fernanda Costa da Silva",
  "Gabriel Rocha",
  "João Santos",
  "Juliana Lima dos Santos",
  "Lucas Silva de Oliveira",
  "Maria Oliveira dos Santos",
  "Mariana Ferreira Alves de Souza",
  "Pedro Almeida dos Reis",
  "Rafael Martins dos Santos",
  "Beatriz Gomes de Andrade",
  "Bruno Henrique da Silva",
  "Camila Teixeira dos Santos",
  "Daniel Souza Ribeiro",
  "Eduardo Monteiro da Costa",
  "Fabiana Ribeiro de Lima",
  "Gustavo Pereira dos Anjos",
  "Helena Carvalho de Freitas",
  "Igor Martins de Oliveira",
  "Juliana Fernanda de Almeida",
  "Karen Souza dos Reis",
  "Leandro Costa de Souza",
  "Natália Lima da Rocha",
  "Otávio Moreira dos Santos",
  "Paula Mendes de Oliveira",
  "Quésia da Silva Ferreira",
  "Ricardo Almeida de Carvalho",
  "Sabrina Moura dos Santos",
  "Tatiana Silva de Freitas",
  "Uriel Costa dos Reis",
  "Vanessa Rocha de Andrade",
  "William Ferreira da Costa",
  "Ximena Lima dos Santos",
  "Yuri Martins da Silva",
  "Zilda Pereira de Oliveira",
  "Aline Dias de Souza",
  "Breno Carvalho dos Santos",
  "Célia Moraes da Costa",
  "Diego Pereira de Oliveira",
  "Estela Costa dos Reis",
  "Flávia Martins de Andrade",
  "Gustavo Oliveira da Silva",
  "Helena Moreira dos Santos",
  "Isabela Ferreira dos Anjos",
  "João Pedro da Costa",
  "Karina Lopes de Almeida",
  "Leila Gomes da Silva",
  "Marcos Vinícius de Souza",
  "Nelson Ribeiro dos Santos",
].sort((a, b) => a.localeCompare(b));

const abbreviateName = (name: string) => {
  const parts = name.split(" ");
  if (parts.length > 2) {
    return parts
      .map((part, index) => {
        if (index === 0) {
          return part;
        } else if (part.length <= 3 || index === parts.length - 1) {
          return part;
        } else {
          return part.charAt(0) + ".";
        }
      })
      .join(" ");
  }
  return name;
};

export default function Selecionados() {
  return (
    <Section
      id="resultados"
      className="relative flex pt-10 md:pt-0 h-auto md:min-h-[846px]"
    >
      <Container className="relative my-auto !px-2 md:px-4 pb-10 z-10 md:mt-10">
        <div className="w-auto flex flex-col justify-center items-center gap-6">
          <PageTitle className="relative text-center mx-auto !w-auto">
            <span className="relative z-10">Cursinho Popular do CeZPEM</span>
            <Image
              priority={false}
              loading="lazy"
              alt="CeZPEM"
              src="/details-text.png"
              className="absolute z-0 min-w-[110%] ml-2 transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-8 md:top-12 md:h-1/2"
              width={484 * 2}
              height={28 * 2}
            />
          </PageTitle>

          <div className="w-auto mx-auto md:max-w-full flex flex-col gap-2 px-4">
            <p className="w-full leading-tight font-archivo text-20px md:text-24px text-center">
              Lista de alunes selecionades para o Cursinho Popular do CeZPEM
              publicada em <b>07/04/2025</b>.
            </p>

            <ul className="w-full mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mt-6 mb-10 px-4 md:px-0 list-disc list-inside text-center md:text-left">
              {studentsList.map((student, index) => (
                <li
                  key={`${student}-${index}`}
                  className="w-full leading-none font-bold font-archivo text-16px list-none"
                >
                  <button className="w-full ring-2 ring-transparent ative:ring-blue-400 hover:ring-blue-300 focus:ring-blue-400 rounded-md px-0 py-1 text-gray-900 font-semibold transition duration-200 ease-in">
                    {abbreviateName(student)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

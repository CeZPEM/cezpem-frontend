import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import Container from "./Container";
import { CezpemLogoText, SoberanaLogoText } from "./Logos";

export default function Footer() {
  return (
    <footer className="bg-navyBlue text-white">
      <Container className="flex flex-col gap-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo e Texto */}
          <div className="text-center md:text-left space-y-2">
            <CezpemLogoText
              size="small"
              variant="white"
              className="mx-auto md:mx-0 w-32"
            />

            <div className="font-archivo">
              <p className="text-md">
                <strong>
                  Centro <span className="text-red">Zoia Prestes</span> de
                  Educação Multidisciplinar
                </strong>
              </p>

              <p className="text-sm text-gray-300">
                Frente de massas de educação do coletivo{" "}
                <a
                  target="_blank"
                  href="https://soberana.tv"
                  className="text-blue-300 hover:text-red"
                >
                  @soberana.tv
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-1 md:max-w-[50%] flex-col gap-8 lg:gap-4">
            {/* Ícones Sociais */}
            <div className="flex w-full md:w-auto justify-between mx-auto gap-8 md:gap-16 md:mr-0">
              <a
                target="_blank"
                href="https://www.instagram.com/centrozoiaprestes"
                className="hover:text-red"
              >
                <FaInstagram size={32} />
              </a>
              <a
                target="_blank"
                href="https://discord.gg/hjZtJmCmVh"
                className="hover:text-red"
              >
                <FaDiscord size={32} />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@CeZPEM"
                className="hover:text-red"
              >
                <FaYoutube size={32} />
              </a>
              <a
                target="_blank"
                href="https://soberana.tv"
                className="hover:opacity-80 group"
              >
                <SoberanaLogoText
                  size="small"
                  className="w-32 group-hover:scale-105 transition-transform duration-300 ease-in"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Separadora */}
        <div className="border-t border-gray-500" />

        {/* Direitos e Links Adicionais */}
        <div className="w-ful md:w-auto text-center text-md flex flex-col md:flex-row justify-center items-center gap-12 pb-6 md:pb-0">
          <div className="flex flex-row items-center gap-3 md:gap-12 text-gray-300">
            <a
              href="#"
              className="underline lg:no-underline hover:underline hover:text-red"
            >
              Termos de privacidade
            </a>
            <a
              href="#"
              className="underline lg:no-underline hover:underline hover:text-red"
            >
              Organize-se!
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

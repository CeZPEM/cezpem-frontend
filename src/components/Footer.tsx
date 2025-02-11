import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import Navbar from "./Navbar";
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
                <a href="https://soberana.tv" className="text-blue-300">
                  @soberana.tv
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-4">
            {/* Navegação */}
            <Navbar className="mx-auto md:mr-0" />

            {/* Ícones Sociais */}
            <div className="flex gap-8">
              <a
                target="_blank"
                href="https://www.instagram.com/centrozoiaprestes/"
                className="hover:opacity-80"
              >
                <FaInstagram size={32} />
              </a>
              <a
                target="_blank"
                href="https://discord.gg/pw2CGQPM"
                className="hover:opacity-80"
              >
                <FaDiscord size={32} />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@CeZPEM"
                className="hover:opacity-80"
              >
                <FaYoutube size={32} />
              </a>
              <a
                target="_blank"
                href="https://soberana.tv"
                className="hover:opacity-80"
              >
                <SoberanaLogoText size="small" className="w-32" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Separadora */}
        <div className="border-t border-gray-500"></div>

        {/* Direitos e Links Adicionais */}
        <div className="w-ful md:w-auto text-center text-md flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-row items-center gap-3 md:gap-12 text-gray-300">
            <a
              href="#"
              className="underline lg:no-underline hover:underline hover:opacity-80"
            >
              Termos de privacidade
            </a>
            <a
              href="#"
              className="underline lg:no-underline hover:underline hover:opacity-80"
            >
              Organize-se!
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

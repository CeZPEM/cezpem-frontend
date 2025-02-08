import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import Navbar from "./Navbar";
import Container from "./Container";
import { CezpemLogoText, SoberanaLogoText } from "./Logos";

export default function Footer() {
  return (
    <footer className="bg-navyBlue text-white">
      <Container className="flex flex-col gap-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo e Texto */}
          <div className="text-center md:text-left max-w-xs">
            <CezpemLogoText size="small" className="w-32" />

            <p className="text-sm mt-1">
              <strong>
                Centro <span className="text-red-500">Zoia Prestes</span> de
                Educação Multidisciplinar
              </strong>
            </p>
            <p className="text-xs text-gray-300">
              Frente de massas de educação do coletivo{" "}
              <a href="https://soberana.tv" className="text-blue-300">
                @soberana.tv
              </a>
            </p>
          </div>

          {/* Navegação */}
          <Navbar />

          {/* Ícones Sociais */}
          <div className="flex gap-6">
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

        {/* Linha Separadora */}
        <div className="border-t border-gray-500"></div>

        {/* Direitos e Links Adicionais */}
        <div className="w-ful md:w-auto text-center text-md flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="text-white flex mx-auto md:mx-0 flex-row items-center gap-1">
            <span className="font-bold">CEZPEM</span>
            <span>|</span>
            <span>Do povo para o povo!</span>
          </div>

          <div className="flex flex-row items-center gap-3 text-gray-300">
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

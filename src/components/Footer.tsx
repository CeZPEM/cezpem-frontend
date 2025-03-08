import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import Container from "./Container";
import { CezpemLogoText, SoberanaLogoText } from "./Logos";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navyBlue text-white">
      <Container className="flex flex-col gap-6 md:gap-10 lg:gap-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo e Texto */}
          <div className="text-center md:text-left space-y-2">
            <CezpemLogoText
              size="small"
              variant="white"
              className="mx-auto md:mx-0 w-32"
            />

            <div className="font-archivo flex flex-col items-center md:items-start gap-3 sm:gap-1">
              <p className="text-md">
                <strong>
                  Centro <span className="text-red">Zoia Prestes</span> de
                  Educação Multidisciplinar
                </strong>
              </p>

              <p className="mx-auto w-full max-w-52 sm:max-w-none text-xs sm:text-sm text-gray-300 mb-4 sm:mb-0">
                <span>Frente de massas de educação do coletivo</span>

                <span className="inline-block md:hidden relative text-center md:text-left h-4 min-w-[96px] ml-2">
                  <span className="h-4">
                    <a
                      target="_blank"
                      href="https://soberana.tv"
                      className="md:hidden hover:opacity-80 inline-block absolute top-0 left-0"
                    >
                      <SoberanaLogoText size="small" className="w-24" />
                    </a>
                  </span>
                </span>

                <a
                  target="_blank"
                  href="https://soberana.tv"
                  className="hidden md:inline-block text-blue-300 hover:text-red ml-1"
                >
                  @soberana.tv
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-1 md:max-w-[50%] flex-col py-4 md:py-0">
            {/* Ícones Sociais */}
            <div className="flex flex-col w-24 md:w-full sm:flex-row items-center justify-center md:justify-between mx-auto gap-8 md:gap-16 md:mr-0">
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
                className="hidden md:block hover:opacity-80 group"
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
        <div className="hidden md:block border-t border-gray-500" />

        {/* Direitos e Links Adicionais */}
        <div className="w-ful md:w-auto text-center text-md flex flex-col md:flex-row items-left justify-center">
          <div className="w-full flex flex-col md:flex-row flex-wrap items-center gap-3 md:gap-12 text-gray-300">
            <div className="flex flex-col leading-tight md:flex-row md:gap-2">
              <span className="text-gray-400">Contato geral:</span>
              <a
                href="mailto:contato@cezpem.com.br"
                className="underline lg:no-underline hover:underline hover:text-red"
              >
                contato@cezpem.com.br
              </a>
            </div>

            <div className="flex flex-col leading-tight md:flex-row md:gap-2">
              <span className="text-gray-400">Relacionamento acadêmico:</span>
              <a
                href="mailto:relacionamentoacademico@cezpem.com.br"
                className="underline lg:no-underline hover:underline hover:text-red"
              >
                academico@cezpem.com.br
              </a>
            </div>

            <div className="hidden md:block flex-1" />

            <Link
              href="/termos"
              className="underline lg:no-underline hover:underline hover:text-red"
            >
              Termos de privacidade
            </Link>

            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6qdWcaGJB9sKtX9Lf9k7i2ikAdAwzwwPw8yxeSuh6L7OE8g/viewform"
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

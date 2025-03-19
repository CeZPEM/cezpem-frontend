import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import Section from "@/components/Section";

import Image from "next/image";
import Link from "next/link";

export default function Section2() {
  return (
    <Section
      id="cursinho"
      className="h-auto md:h-[660px] lg:h-auto xl:h-auto flex items-end overflow-hidden"
    >
      <Container className="mt-8 md:mt-auto lg:mt-0 md:mb-0 !py-0 !px-0 md:px-4">
        <div className="flex flex-col-reverse xl:flex-row items-center md:items-end justify-center lg:gap-x-8">
          <div className="relative w-full md:w-full mx-auto min-h-[200px] md:min-w-96 flex flex-1 right-0 overflow-hidden md:overflow-visible">
            <Image
              priority={false}
              loading="lazy"
              alt="CeZPEM"
              src="/enem-cezpem.png"
              className="max-w-none absolute md:relative w-[120vw] md:w-full md:max-w-[926px] -left-8 top-4 mx-auto md:left-auto xl:left-12 md:top-0"
              width={249 * 2}
              height={89 * 2}
            />
          </div>

          <div className="xl:w-[34%] mx-auto flex flex-col gap-3 lg:gap-0 sm:mt-8 md:mt-16 md:max-w-[720px] px-4 md:px-0">
            <Image
              priority={false}
              loading="lazy"
              alt="CeZPEM"
              src="/CeZPEM-bottom.png"
              className="w-full md:hidden max-w-[100px] mx-auto"
              width={249}
              height={89}
            />

            <PageTitle className="relative text-center lg:text-right">
              <span className="relative z-10">
                Cursinho Popular Pré-Vestibular
              </span>
              <Image
                priority={false}
                loading="lazy"
                alt="CeZPEM"
                src="/details-text.png"
                className="absolute z-0 w-auto max-w-full xs:w-full sm:max-w-[90%] sm:ml-1 md:max-w-full transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-7 md:h-9 md:top-[38px] md:ml-4 lg:top-9 lg:ml-16 xl:ml-4"
                width={484 * 2}
                height={28 * 2}
              />
            </PageTitle>

            <p className="w-full leading-tight font-archivo text-20px md:text-24px md:mt-6 text-center lg:text-right">
              O cursinho Popular do <b> CeZPEM </b> oferece aulas gratuitas
              voltadas aos conteúdos da grade regular do Enem.
            </p>

            <p className="w-full leading-tight md:my-6 font-archivo text-14px md:text-16px text-center lg:text-right">
              As aulas ocorrem ao vivo, para que adolescentes e adultos tenham
              acesso ao conteúdo de um cursinho preparatório, e ainda possam
              tirar suas dúvidas de forma direta com os professores.
            </p>

            <div className="w-full mt-2 md:my-10 ml-auto flex">
              <Link
                target="_blank"
                href="https://forms.gle/HvDTQTNZecfEvN6E8"
                className="w-full min-w-[320px] max-w-[320px] md:max-w-[360px] mx-auto xl:mr-0"
              >
                <Button className="w-[80%] md:w-full mx-auto flex items-center justify-center gap-2 text-20px">
                  Quero me cadastrar!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

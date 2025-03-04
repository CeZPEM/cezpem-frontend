"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import HotSiteFAQ from "@/components/HotSiteFAQ";
import { SoberanaLogoText } from "@/components/Logos";
import Page from "@/components/Page";
import Section from "@/components/Section";
import YoutubePlayer from "@/components/YoutubePlayer";
import Image from "next/image";
import Link from "next/link";

type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h2
      className={`w-full leading-tight mx-auto max-w-64 md:max-w-none text-28px md:text-48px ${
        className || ""
      }`.trim()}
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <Page>
      <Section
        id="inicio"
        className="relative flex h-screen sm:h-[720px] bg-navyBlue"
      >
        <div className="w-full h-full absolute hidden md:block top-0 left-0 z-0 overflow-hidden">
          <Image
            alt="CeZPEM"
            src="/details-1-top-right.png"
            className="absolute -top-8 -right-[1px]"
            width={249}
            height={89}
          />

          <Image
            alt="CeZPEM"
            src="/details-1-bottom-left.png"
            className="w-auto absolute -bottom-[1px] -left-[1px]"
            width={249}
            height={89}
          />
        </div>

        <Container className="relative my-auto px-0 sm:px-4 pb-10 z-10">
          <div className="w-full text-white text-center flex flex-col items-center justify-center gap-2 px-4 sm:px-0">
            <h1 className="text-40px md:text-64px font-bold">
              Conheça o{" "}
              <span className="ml-1 h-9 md:h-16 w-[120px] md:w-[249px] inline-block">
                <span className="relative flex h-[89px] mt-0">
                  <Image
                    alt="CeZPEM"
                    src="/CeZPEM-highlight.svg"
                    className="w-auto absolute"
                    width={249}
                    height={89}
                  />
                </span>
              </span>
            </h1>

            <div className="font-archivo mx-auto max-w-[700px] text-20px md:text-24px">
              O Centro <b> Zoia Prestes </b> de Educação Multidisciplinar
              (CeZPEM) é uma frente de massas do Coletivo{" "}
              <span className="ml-2 h-6 w-32 inline-block">
                <span className="relative flex h-5 mt-0">
                  <SoberanaLogoText
                    size="small"
                    variant="white"
                    className="w-32 absolute"
                  />
                </span>
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-[960px] mt-14 md:mt-8 rounded-md overflow-hidden">
            <YoutubePlayer
              // thumbnail="/ajude-cezpem.png"
              id="kRQkAR05kAI"
              title="Organize-se no CeZPEM"
            />
          </div>
        </Container>
      </Section>

      <Section
        id="cursinho"
        className="h-screen sm:h-auto md:h-[660px] flex items-end"
      >
        <Container className="mt-8 md:mt-auto md:mb-0 !py-0 !px-0 md:px-4 overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row items-end gap-x-8">
            <div className="relative w-full md:w-full min-h-[200px] md:min-w-96 flex md:flex-1 flex-1 right-0 overflow-hidden md:overflow-visible">
              <Image
                alt="CeZPEM"
                src="/enem-cezpem.png"
                className="max-w-none absolute md:relative w-[120vw] md:w-full md:max-w-[926px] -left-8 top-4 md:left-12 md:top-0"
                width={249 * 2}
                height={89 * 2}
              />
            </div>

            <div className="md:w-[34%] flex flex-col gap-3 md:gap-0 md:max-w-[460px] px-4 md:px-0">
              <Image
                alt="CeZPEM"
                src="/CeZPEM-bottom.png"
                className="w-full md:hidden max-w-[100px] mx-auto"
                width={249}
                height={89}
              />

              <PageTitle className="relative text-center md:text-right">
                <span className="relative z-10">
                  Cursinho Popular Pré-Vestibular
                </span>
                <Image
                  alt="CeZPEM"
                  src="/details-text.png"
                  className="absolute z-0 m-auto w-auto max-w-full transform -translate-y-1/2 top-7 -right-1 md:top-11 md:-right-11"
                  width={484 * 2}
                  height={28 * 2}
                />
              </PageTitle>

              <p className="w-full leading-tight text-20px md:text-24px md:mt-6 text-center md:text-right">
                O cursinho Popular do <b> CeZPEM </b> oferece aulas gratuitas
                voltadas aos conteúdos da grade regular do Enem.
              </p>

              <p className="w-full leading-tight md:my-6 text-16px md:text-20px text-center md:text-right">
                As aulas ocorrem ao vivo, para que adolescentes e adultos tenham
                acesso ao conteúdo de um cursinho preparatório, e ainda possam
                tirar suas dúvidas de forma direta com os professores.
              </p>

              <div className="w-full mt-2 md:my-10 ml-auto flex ">
                <Link
                  target="_blank"
                  href="https://forms.gle/HvDTQTNZecfEvN6E8"
                  className="w-full min-w-[320px] max-w-[320px] md:max-w-[360px] mx-auto md:mr-0"
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

      <Section
        id=""
        className="relative h-screen sm:h-[720px] bg-red grid grid-cols-1"
      >
        <div className="w-full h-full absolute hidden md:block top-0 left-0 z-0 overflow-hidden">
          <Image
            alt="CeZPEM"
            src="/details-2-top-left.png"
            className="absolute -top-[1px] -left-[1px]"
            width={249}
            height={89}
          />

          <Image
            alt="CeZPEM"
            src="/details-2-bottom-right.png"
            className="absolute -bottom-8 -right-[1px]"
            width={249}
            height={89}
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-0 overflow-hidden md:overflow-visible">
          <Image
            alt="CeZPEM"
            src="/piggy-bank-right.png"
            className="absolute -top-1 md:-top-12 md:right-auto left-1/3 md:left-1/4 w-32 blur-[2px]"
            width={249}
            height={89}
          />
          <Image
            alt="CeZPEM"
            src="/piggy-bank-left.png"
            className="absolute bottom-1/3 left-auto -right-5 md:-bottom-8 md:right-auto md:left-1/3 w-24 md:w-32"
            width={249}
            height={89}
          />
        </div>

        <Container className="relative z-10 sm:h-[720px] grid grid-cols-1 md:grid-cols-[36%_1fr] gap-8 md:gap-0 !px-0">
          <div className="w-full h-auto my-auto flex flex-col gap-4 text-white">
            <PageTitle className="relative text-center w-auto mx-auto mt-20 md:mt-0">
              <span className="relative z-10">Apoie Nosso Projeto!</span>
              <Image
                alt="CeZPEM"
                src="/details-text-2.png"
                className="absolute z-0 w-auto transform -translate-y-1/2 top-7 left-0 md:top-12 md:-right-4"
                width={484 * 2}
                height={28 * 2}
              />
            </PageTitle>

            <p className="w-full leading-tight text-20px md:text-24px text-center md:text-right">
              O objetivo do cursinho é garantir o acesso gratuito dos alunes à
              educação, sem deixar de remunerar os professores. Nossos recursos
              virão exclusivamente do financiamento coletivo, por isso a sua
              colaboração é fundamental pra existência desse projeto.
            </p>

            <div className="w-full md:my-10 ml-auto flex ">
              <Link
                target="_blank"
                href="http://apoia.se/cezpem"
                className="w-full min-w-[320px] max-w-[320px] md:max-w-[360px] mx-auto md:mr-0"
              >
                <Button
                  variant="secondary"
                  className="w-[50%] md:w-full font-bold mx-auto flex items-center justify-center gap-2 text-20px"
                >
                  Apoie!
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full h-auto my-auto">
            <Image
              alt="CeZPEM"
              src="/ajude-cezpem.png"
              className="m-auto w-auto relative -left-8 md:-left-16 -bottom-6"
              width={484 * 2}
              height={28 * 2}
            />
          </div>
        </Container>
      </Section>

      <Section id="" className="min-h-screen h-auto sm:min-h-[720px]">
        <Container className="w-full h-full pt-20 md:pt-12 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Image
              alt="CeZPEM"
              src="/CeZPEM-colagem.png"
              className="w-auto m-auto"
              width={1452}
              height={1282}
            />
          </div>

          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <PageTitle className="w-full max-w-none relative text-center">
              <span className="relative z-10">Perguntas Frequentes</span>
              <Image
                alt="CeZPEM"
                src="/details-text.png"
                className="absolute h-1/2 z-0 w-auto transform -translate-x-1/2 top-5 md:top-8 left-1/2 ml-3"
                width={484}
                height={28}
              />
            </PageTitle>

            <HotSiteFAQ />
          </div>
        </Container>
      </Section>
    </Page>
  );
}

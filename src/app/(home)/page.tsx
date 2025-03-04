"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { SoberanaLogoText } from "@/components/Logos";
import Page from "@/components/Page";
import Section from "@/components/Section";
import YoutubePlayer from "@/components/YoutubePlayer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <Section className="h-screen md:h-[720px] bg-navyBlue">
        <Container>
          <div className="w-full text-white text-center">
            <h1 className="text-48px md:text-64px font-bold">
              Conheça o{" "}
              <span className="ml-1 md:h-16 w-[249px] inline-block">
                <span className="relative flex h-[89px] mt-0">
                  <Image
                    alt="CeZPEM"
                    src="/CeZPEM-selected.svg"
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
            <YoutubePlayer id="8bVopGuQ3Y4" title="" />
          </div>
        </Container>
      </Section>

      <Section className="h-screen md:h-[720px] flex items-end">
        <Container className="!pb-0 mt-auto">
          <div className="flex flex-col-reverse md:flex-row items-end gap-8 mt-auto">
            <div className="flex-1">
              <Image
                alt="CeZPEM"
                src="/enem-cezpem.png"
                className="w-full max-w-[926px]"
                width={249}
                height={89}
              />
            </div>

            <div className="flex-1 flex flex-col gap-3 md:gap-0 max-w-[460px]">
              <Image
                alt="CeZPEM"
                src="/CeZPEM-bottom.png"
                className="w-full md:hidden max-w-[120px] mx-auto"
                width={249}
                height={89}
              />

              <h2 className="w-full leading-tight mx-auto max-w-64 md:max-w-none text-28px md:text-48px text-center md:text-right">
                Cursinho Popular Pré-Vestibular
              </h2>

              <p className="w-full leading-tight text-20px md:text-24px md:mt-6 text-center md:text-right">
                O cursinho Popular do <b> CeZPEM </b> oferece aulas gratuitas
                voltadas aos conteúdos da grade regular do Enem.
              </p>

              <p className="w-full leading-tight md:my-6 text-16px md:text-20px text-center md:text-right">
                As aulas ocorrem ao vivo, para que adolescentes e adultos tenham
                acesso ao conteúdo de um cursinho preparatório, e ainda possam
                tirar suas dúvidas de forma direta com os professores.
              </p>

              <div className="w-full min-w-[320px] max-w-[360px] mt-2 md:my-10 ml-auto flex ">
                <Link
                  target="_blank"
                  href="http://apoia.se/cezpem"
                  className="w-full mx-auto"
                >
                  <Button className="w-[80%] md:w-full mx-auto flex items-center justify-center gap-2">
                    Quero me cadastrar!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="h-screen md:h-[720px] bg-red">
        <Container>teste</Container>
      </Section>

      <Section className="h-screen md:h-[720px]">
        <Container>teste</Container>
      </Section>
    </Page>
  );
}

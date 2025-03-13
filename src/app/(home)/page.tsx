"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import HotSiteFAQ from "@/components/HotSiteFAQ";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import Section1 from "./components/Section1";
import dynamic from "next/dynamic";
import { PageTitle } from "./components/PageTitle";

// lazy-loaded
const Section2 = dynamic(() => import("./components/Section2"));

export default function Home() {
  return (
    <Page>
      <Section1 />

      <Section2 />

      <Section
        id="apoie"
        className="relative h-screen sm:h-[1024px] xl:h-[720px] bg-red grid grid-cols-1"
      >
        <div className="w-full h-full absolute hidden md:block top-0 left-0 z-0 overflow-hidden">
          <Image
            priority={false}
            loading="lazy"
            alt="CeZPEM"
            src="/details-2-top-left.png"
            className="absolute -top-[1px] -left-[1px]"
            width={249}
            height={89}
          />

          <Image
            priority={false}
            loading="lazy"
            alt="CeZPEM"
            src="/details-2-bottom-right.png"
            className="absolute -bottom-8 -right-[1px]"
            width={249}
            height={89}
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 z-0 overflow-hidden md:overflow-visible">
          <Image
            priority={false}
            loading="lazy"
            alt="CeZPEM"
            src="/piggy-bank-right.png"
            className="absolute -top-1 md:-top-12 md:right-auto left-1/3 md:left-1/4 w-32 blur-[1px]"
            width={249}
            height={89}
          />

          <Image
            priority={false}
            loading="lazy"
            alt="CeZPEM"
            src="/piggy-bank-left.png"
            className="absolute bottom-[40%] left-auto -right-5 md:-bottom-8 md:right-auto md:left-1/3 w-24 md:w-32"
            width={249}
            height={89}
          />
        </div>

        <Container className="relative z-10 xl:min-h-[720px] grid grid-cols-1 xl:grid-cols-[36%_1fr] gap-8 md:gap-0 px-0">
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

            <p className="w-full leading-tight font-archivo text-20px md:text-24px text-center md:text-left">
              O objetivo do cursinho é garantir o acesso gratuito dos alunes à
              educação, sem deixar de remunerar os professores. Nossos recursos
              virão exclusivamente do financiamento coletivo, por isso a sua
              colaboração é fundamental pra existência desse projeto.
            </p>

            <div className="w-full md:my-10 ml-auto flex">
              <Link
                target="_blank"
                href="http://apoia.se/cezpem"
                className="w-full min-w-[320px] max-w-[320px] md:max-w-[360px] mx-auto md:ml-0"
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
              priority={false}
              loading="lazy"
              alt="CeZPEM"
              src="/piggy-bank-center.png"
              className="m-auto w-auto relative -left-8 md:-left-16 -bottom-6"
              width={484 * 2}
              height={28 * 2}
            />
          </div>
        </Container>
      </Section>

      <Section id="sobre" className="min-h-screen h-auto sm:min-h-[720px] grid">
        <Container className="w-full h-full pt-28 sm:pt-44 md:pt-12 grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-12">
          <div className="order-last md:order-none w-full h-full flex flex-col items-center justify-center">
            <Image
              priority={false}
              loading="lazy"
              alt="CeZPEM"
              src="/CeZPEM-colagem.png"
              className="w-auto m-auto"
              width={1452}
              height={1282}
            />
          </div>

          <div className="order-first md:order-none w-full h-full flex flex-col items-center justify-center gap-12">
            <PageTitle className="w-full max-w-none relative text-center">
              <span className="relative z-10">Perguntas Frequentes</span>
              <Image
                priority={false}
                loading="lazy"
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

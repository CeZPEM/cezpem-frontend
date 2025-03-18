import Container from "@/components/Container";
import HotSiteFAQ from "@/components/HotSiteFAQ";
import { PageTitle } from "@/components/PageTitle";
import Section from "@/components/Section";

import Image from "next/image";

export default function Section4() {
  return (
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
              className="absolute transform -translate-x-1/2 h-1/2 z-0 w-full max-w-96 md:max-w-none md:w-full md:max-w-[440px] top-5 md:top-8 left-1/2 ml-3"
              width={484}
              height={28}
            />
          </PageTitle>

          <HotSiteFAQ />
        </div>
      </Container>
    </Section>
  );
}

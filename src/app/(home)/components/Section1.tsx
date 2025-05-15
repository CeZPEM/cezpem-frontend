import Container from "@/components/Container";
import Section from "@/components/Section";
import Lottie from "lottie-react";
import Image from "next/image";

import highlightAnimation from "../../../../public/highlight.json";
import { SoberanaLogoText } from "@/components/Logos";
import Section1Players from "./Section1Players";

export default function Section1() {
  return (
    <Section
      id="inicio"
      className="relative flex pt-10 md:pt-0 h-auto md:min-h-[846px] bg-navyBlue"
    >
      <div className="w-full h-full absolute hidden md:block top-0 left-0 z-0 overflow-hidden">
        <Image
          priority={false}
          loading="lazy"
          alt="" 
          aria-hidden="true"
          src="/details-1-top-right.png"
          className="absolute -top-8 -right-[1px]"
          width={249}
          height={89}
        />

        <Image
          priority={false}
          loading="lazy"
          alt="" 
          aria-hidden="true"
          src="/details-1-bottom-left.png"
          className="absolute -bottom-[1px] -left-[1px]"
          width={249}
          height={89}
        />
      </div>

      <Container className="relative my-auto !px-2 md:px-4 pb-10 z-10">
        <div className="w-full text-white text-center flex flex-col items-center justify-center gap-2 px-4 sm:px-0">
          <h1 className="text-40px sm:text-64px font-bold">
            Conheça o{" "}
            <span className="sr-only">CeZPEM.</span>
            <span className="sm:-ml-2 h-7 md:h-16 w-[150px] sm:w-[249px] inline-block">
              <span className="relative flex w-auto h-auto sm:h-[24px] md:h-[94px] mt-4 sm:mt-0">
                <Image
                  priority
                  loading="eager"
                  alt="" 
                  aria-hidden="true"
                  src="/CeZPEM.svg"
                  className="absolute z-[1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  width={249 * 2}
                  height={89 * 2}
                />

                <span className="absolute z-[0] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[74px] sm:w-[264px] sm:h-[98px]">
                  <Lottie aria-hidden="true" animationData={highlightAnimation} loop={false} />
                </span>
              </span>
            </span>
          </h1>

          <div className="font-archivo mx-auto max-w-[700px] text-20px md:text-24px">
            
            <p className="inline">
              O Centro <b> Zoia Prestes </b> de Educação Multidisciplinar <span className="sr-only">cezpem</span><abbr aria-hidden="true">(CeZPEM)</abbr> {" "}
              é uma frente de massas do Coletivo{" "} <span className="sr-only">Soberana.</span>
            </p>
            
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

        <Section1Players />
      </Container>
    </Section>
  );
}

"use client";

import { useEffect, useState } from "react";

import BannerImage from "@/components/BannerImage";
import Container from "@/components/Container";
import Page from "@/components/Page";
import { PageTitle } from "@/components/PageTitle";
import SearchBar from "@/components/SearchBar";
import Section from "@/components/Section";
import FaqService from "@/services/faqService";
import { FaqResponse } from "@/types";
import Image from "next/image";
import { FaqToggle } from "@/components/FaqToggle";

export default function Sobre() {
  const [faqArray, setFaqArray] = useState<FaqResponse["data"] | null>(null);

  const FetchFaqs = async () => {
    const { data } = await FaqService.getFaqs(
      {
        "filters[area][name][$eq]": "Sobre",
        populate: "area",
      },
      "order:asc"
    );

    setFaqArray(data);
  };

  useEffect(() => {
    FetchFaqs();
  }, []);

  return (
    <Page>
      <Section className="bg-navyBlue">
        <Container>
          <SearchBar id="main-search-bar" variant="dark" />
        </Container>
      </Section>

      <Section>
        <BannerImage
          src="/about-cezpem-banner.jpg"
          alt="Banner 1"
          className="w-full h-full object-cover"
          width={1920}
          height={443}
          priority
        />
      </Section>

      <Section>
        <Container>
          <PageTitle className="text-center">Quem somos</PageTitle>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="w-full font-archivo font-20px flex flex-col gap-7">
              <p>
                O Centro Zoia Prestes de Educação Multidisciplinar (CeZPEM) é
                uma frente de massas que tem como vanguarda o Coletivo Soberana
                e que tem por objetivos:
              </p>

              <p className="pl-4">
                I. Organizar os profissionais da educação em sua luta por
                direitos e pela construção de uma sociedade socialista, onde a
                educação não seja vista e tratada como mercadoria;
              </p>

              <p className="pl-4">
                II. Ofertar, a preços populares, educação acadêmica e cultural
                em âmbito multidisciplinar, de forma complementar à educação
                regular, aos membros de nossa comunidade, promovendo e
                valorizando o trabalho des professores, e criando uma ponte
                entre estes e alunes;
              </p>

              <p className="pl-4">
                III. Ofertar aulas de cursinho pré-vestibular preparatório para
                o Enem, conforme rege o calendário da educação nacional, com o
                intuito de fomentar o acesso dos jovens de baixa renda às
                universidades.
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              {faqArray?.map((faqItem, index) => (
                <FaqToggle key={index} faqItem={faqItem} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <PageTitle className="text-center">
            Quem é Zoia Prestes e por quê homenageá-la?
          </PageTitle>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/about-zoia-prestes.png"
                alt="Zoia Ribeiro Prestes"
                className="w-full h-full object-cover"
                width={800}
                height={912}
                priority
              />
            </div>

            <div className="w-full font-archivo font-20px flex flex-col gap-7">
              <p>
                Zoia Ribeiro Prestes viveu sua infância durante a ditadura
                cívico-militar brasileira exilada na União Soviética, onde
                estudou por toda a educação básica e se graduou em Pedagogia
                pela Universidade Estatal de Moscou. Na mesma instituição se
                tornou mestra em Pedagogia e Psicologia Pré-escolar e,
                posteriormente, no Brasil, tornou-se doutora em Educação pela
                UNB.
              </p>

              <p>
                Em sua trajetória acadêmica, teve contato com a teoria de Lev
                Vigotski, psicólogo soviético pioneiro na aplicação do método
                marxista ao estudo do desenvolvimento humano, e se dedica a
                contribuir para que sua teoria chegue ao Brasil de forma
                integral, sem que o viés político neoliberal estadunidense
                altere o aspecto político de sua obra, como acontecia em
                traduções anteriores às suas. Uma vez que viveu sua infância
                tendo o russo como sua língua primária de comunicação, suas
                traduções trazem contribuições que nos permitem enxergar a
                teoria de Vigotski em sua complitude, e compreender o salto
                epistemológico que esta representa para a compreensão do sujeito
                em seus aspectos sociais.
              </p>

              <p>
                Além disso, Zoia é professora da Faculdade de Educação da UFF e
                desenvolve pesquisas na área da Educação, Psicologia e
                Desenvolvimento da criança, com base na teoria
                histórico-cultural, e também atua ativamente na luta pela
                preservação da memória de seu pai, Luis Carlos Prestes, um dos
                grandes nomes da luta pela construção do socialismo brasileiro.
              </p>

              <p>
                Entendemos que é importante trazermos à luz o nome de Zoia, uma
                pessoa que, nos dias atuais, continua lutando para a construção
                revolucionária, através de seu trabalho docente e também de suas
                atuações políticas, para que possamos engajar aqueles que se
                iniciam na luta tendo como referência a figura de uma professora
                que durante toda sua vida se dedicou à educação e ao fomento do
                socialismo.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}

"use client";

import Container from "@/components/Container";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Image from "next/image";

type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h2
      className={`w-full leading-tight mx-auto md:max-w-none text-32px md:text-48px ${
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
        id="termos"
        className="min-h-screen flex items-end pb-10 md:pb-20"
      >
        <Container className="mt-8 md:mt-auto md:mb-0 overflow-hidden">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="w-full flex flex-col px-0 md:px-0 mx-auto">
              <PageTitle className="relative text-center sm:!max-w-none !w-full mx-auto">
                <span className="relative z-10">Termos de Uso e</span>
                <Image
                  alt="CeZPEM"
                  src="/details-text.png"
                  className="absolute z-0 m-auto w-full max-w-72 md:max-w-[400px] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-8 md:top-12"
                  width={484 * 2}
                  height={28 * 2}
                />
              </PageTitle>

              <PageTitle className="relative text-center sm:!max-w-none !w-full mx-auto">
                <span className="relative z-10">Política de Privacidade</span>
                <Image
                  alt="CeZPEM"
                  src="/details-text.png"
                  className="absolute z-0 m-auto w-full max-w-none sm:max-w-[360px] lg:max-w-[540px] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-8 md:top-12"
                  width={484 * 2}
                  height={28 * 2}
                />
              </PageTitle>
            </div>

            <div className="w-auto flex flex-col px-4 md:px-0 mx-auto gap-4 md:gap-8">
              <div className="w-full flex flex-col gap-4">
                {/* Seção 1 - Termos de Uso */}
                <h3 className="font-archivo text-24px md:text-28px font-bold">
                  1. Termos de Uso
                </h3>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  <strong>1.1. Sobre o Site:</strong> O site do CeZPEM tem como
                  objetivo divulgar informações sobre nossas atividades,
                  facilitar a inscrição em nossos projetos e promover o apoio
                  financeiro por meio de plataformas externas.
                </p>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  <strong>1.2. Uso do Site:</strong> Ao acessar e utilizar este
                  site, o usuário concorda com os presentes Termos de Uso. O
                  site destina-se exclusivamente à informação e ao
                  direcionamento para formulários de inscrição e para o
                  Apoia-se.
                </p>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  <strong>1.3. Redirecionamentos:</strong> Nosso site pode
                  conter links para serviços de terceiros, como formulários do
                  Google e a plataforma Apoia-se. O CeZPEM não se responsabiliza
                  pelas políticas ou práticas desses serviços.
                </p>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  <strong>1.4. Responsabilidades:</strong> Os usuários devem
                  fornecer informações verídicas ao preencher qualquer
                  formulário no site. O CeZPEM se reserva o direito de excluir
                  informações consideradas falsas ou inadequadas.
                </p>

                {/* Seção 2 - Política de Privacidade */}
                <h3 className="font-archivo text-24px md:text-28px font-bold">
                  2. Política de Privacidade
                </h3>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  <strong>2.1. Coleta de Dados:</strong> O site não coleta dados
                  automaticamente. No entanto, os formulários vinculados ao site
                  solicitam informações como nome, e-mail, telefone, idade,
                  estado e dados de diversidade para fins de inscrição e
                  organização interna.
                </p>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  <strong>2.2. Uso das Informações:</strong> Os dados coletados
                  são utilizados exclusivamente para o funcionamento das
                  atividades do CeZPEM, como seleção de participantes para o
                  cursinho popular e contato com novos membros. Não
                  compartilhamos ou vendemos informações a terceiros.
                </p>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  <strong>2.3. Armazenamento e Proteção:</strong> Os dados são
                  armazenados em plataformas seguras e acessíveis apenas pela
                  equipe organizadora. Empregamos medidas adequadas para
                  garantir a segurança das informações coletadas.
                </p>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  <strong>2.4. Direitos dos Usuários:</strong> Os participantes
                  podem solicitar a remoção de seus dados a qualquer momento,
                  entrando em contato com a equipe do CeZPEM.
                </p>

                {/* Seção 3 - Atualizações */}
                <h3 className="font-archivo text-24px md:text-28px font-bold">
                  3. Atualizações
                </h3>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  Estes termos podem ser atualizados periodicamente para
                  refletir mudanças no funcionamento do site ou nas atividades
                  do CeZPEM. Recomendamos que os usuários revisitem esta página
                  regularmente.
                </p>
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  Dúvidas ou solicitações? Entre em contato conosco pelos canais
                  oficiais do CeZPEM.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}

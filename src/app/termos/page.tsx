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
      className={`w-full leading-tight mx-auto max-w-64 md:max-w-none text-32px md:text-48px ${
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
      <Section id="termos" className="min-h-screen flex items-end">
        <Container className="mt-8 md:mt-auto md:mb-0 overflow-hidden">
          <div className="flex flex-row">
            <div className="w-auto flex flex-col px-4 md:px-0 mx-auto gap-4 md:gap-8">
              <PageTitle className="relative text-center sm:max-w-96 !w-auto mx-auto">
                <span className="relative z-10">Termos de Privacidade</span>
                <Image
                  alt="CeZPEM"
                  src="/details-text.png"
                  className="absolute z-0 m-auto w-auto max-w-44 sm:max-w-80 md:max-w-[480px] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-7 sm:top-8 md:top-12"
                  width={484 * 2}
                  height={28 * 2}
                />
              </PageTitle>

              <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                Neste Termo de Uso e Política de Privacidade, você encontrará
                informações sobre o funcionamento do serviço solicitado,
                fornecido por meio de aplicações no site, sistemas e aplicativos
                para dispositivos móveis e as regras aplicáveis a ele; o
                embasamento legal relacionado à prestação do serviço; as suas
                responsabilidades ao utilizar o serviço; as responsabilidades da
                administração pública ao fornecer o serviço; informações para
                contato, caso exista alguma dúvida ou seja necessário atualizar
                informações; e o foro responsável por eventuais reclamações,
                caso questões deste documento tenham sido violadas.
              </p>

              <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                Além disso, você encontrará informações sobre qual o tratamento
                dos dados pessoais realizados, de forma automatizada ou não, e a
                sua finalidade; quais dados pessoais são necessários para a
                prestação do serviço; a forma como eles são coletados; se há o
                compartilhamento dos seus dados com terceiros; e quais as
                medidas de segurança implementadas para proteger os seus dados.
              </p>

              <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                O Termo de Uso e a Política de Privacidade na Receita Federal
                foram elaborados em conformidade com a Lei Federal nº 12.965, de
                23 de abril de 2014 (Marco Civil da Internet), e com a Lei
                Federal nº 13.709, de 14 de agosto de 2018 (Lei Geral de
                Proteção de Dados Pessoais).
              </p>

              <div className="w-auto flex flex-col mx-auto gap-4">
                <p className="w-full leading-tight font-archivo text-18px md:text-24px">
                  A Receita Federal se compromete a cumprir as normas previstas
                  na Lei Geral de Proteção de Dados Pessoais (LGPD), e respeitar
                  os princípios dispostos no art. 6º:
                </p>

                <ul className="w-full flex flex-col gap-3 leading-tight font-archivo text-18px md:text-24px">
                  <li>
                    I - finalidade: realização do tratamento para propósitos
                    legítimos, específicos, explícitos e informados ao titular,
                    sem possibilidade de tratamento posterior de forma
                    incompatível com essas finalidades;
                  </li>
                  <li>
                    II - adequação: compatibilidade do tratamento com as
                    finalidades informadas ao titular, de acordo com o contexto
                    do tratamento;
                  </li>
                  <li>
                    III - necessidade: limitação do tratamento ao mínimo
                    necessário para a realização de suas finalidades, com
                    abrangência dos dados pertinentes, proporcionais e não
                    excessivos em relação às finalidades do tratamento de dados;
                  </li>
                  <li>
                    IV - livre acesso: garantia, aos titulares, de consulta
                    facilitada e gratuita sobre a forma e a duração do
                    tratamento, bem como sobre a integralidade de seus dados
                    pessoais;
                  </li>
                  <li>
                    V - qualidade dos dados: garantia, aos titulares, de
                    exatidão, clareza, relevância e atualização dos dados, de
                    acordo com a necessidade e para o cumprimento da finalidade
                    de seu tratamento;
                  </li>
                  <li>
                    VI - transparência: garantia, aos titulares, de informações
                    claras, precisas e facilmente acessíveis sobre a realização
                    do tratamento e os respectivos agentes de tratamento,
                    observados os segredos comercial e industrial;
                  </li>
                  <li>
                    VII - segurança: utilização de medidas técnicas e
                    administrativas aptas a proteger os dados pessoais de
                    acessos não autorizados e de situações acidentais ou
                    ilícitas de destruição, perda, alteração, comunicação ou
                    difusão;
                  </li>
                  <li>
                    VIII - prevenção: adoção de medidas para prevenir a
                    ocorrência de danos em virtude do tratamento de dados
                    pessoais;
                  </li>
                  <li>
                    IX - não discriminação: impossibilidade de realização do
                    tratamento para fins discriminatórios ilícitos ou abusivos;
                  </li>
                  <li>
                    X - responsabilização e prestação de contas: demonstração,
                    pelo agente, da adoção de medidas eficazes e capazes de
                    comprovar a observância e o cumprimento das normas de
                    proteção de dados pessoais e, inclusive, da eficácia dessas
                    medidas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}

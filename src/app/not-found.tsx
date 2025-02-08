"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Section from "@/components/Section";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full">
      {/* Seção azul com a barra de busca */}
      <Section className="bg-navyBlue py-6">
        <Container>
          <SearchBar />
        </Container>
      </Section>

      {/* Conteúdo principal */}
      <Section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700">
          404 - Página não encontrada
        </h1>
        <p className="text-gray-600 mt-4 max-w-lg">
          Opa! Parece que a página que você está procurando não existe.
          <br />
          Que tal tentar uma busca ou voltar para a página inicial?
        </p>

        {/* Botão para voltar à home */}
        <Link href="/">
          <Button className="mt-6">Voltar para a Home</Button>
        </Link>
      </Section>
    </div>
  );
}

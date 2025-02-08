"use client";

import BannerCTA from "@/components/BannerCTA";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="w-full">
      <Section className="bg-navyBlue">
        <Container>
          <SearchBar />
        </Container>
      </Section>

      <Section>
        <BannerCTA />
      </Section>
    </div>
  );
}

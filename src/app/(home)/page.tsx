"use client";

import BannerCTA from "@/components/BannerCTA";
import Container from "@/components/Container";
import CourseList from "@/components/CourseList";
import FeaturedCoursesCarousel from "@/components/FeaturedCoursesCarousel";
import Page from "@/components/Page";
import SearchBar from "@/components/SearchBar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Page>
      <Section className="bg-navyBlue">
        <Container>
          <SearchBar id="main-search-bar" variant="dark" />
        </Container>
      </Section>

      <Section>
        <BannerCTA />
      </Section>

      <Section className="bg-red !px-0">
        <FeaturedCoursesCarousel />
      </Section>

      <Section>
        <Container>
          <CourseList />
        </Container>
      </Section>
    </Page>
  );
}

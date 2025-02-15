"use client";

import BannerCTA from "@/components/BannerCTA";
import Container from "@/components/Container";
import CourseList from "@/components/CourseList";
import FeaturedCoursesCarousel from "@/components/FeaturedCoursesCarousel";
import SearchBar from "@/components/SearchBar";
import Section from "@/components/Section";
import { courses } from "@/mocks";

export default function Home() {
  return (
    <div className="w-full">
      <Section className="bg-navyBlue">
        <Container>
          <SearchBar variant="dark" />
        </Container>
      </Section>

      <Section>
        <BannerCTA />
      </Section>

      <Section className="bg-red !px-0">
        <FeaturedCoursesCarousel courses={courses} />
      </Section>

      <Section>
        <Container>
          <CourseList courses={courses} />
        </Container>
      </Section>
    </div>
  );
}

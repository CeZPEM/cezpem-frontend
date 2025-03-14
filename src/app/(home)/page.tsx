"use client";

import dynamic from "next/dynamic";

import Page from "@/components/Page";
import Section1 from "./components/Section1";

// lazy-loaded
const Section2 = dynamic(() => import("./components/Section2"));
const Section3 = dynamic(() => import("./components/Section3"));
const Section4 = dynamic(() => import("./components/Section4"));

export default function Home() {
  return (
    <Page>
      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />
    </Page>
  );
}

import { useEffect, useState } from "react";

import { FaqResponse } from "@/types";
import { FaqToggle } from "./FaqToggle";

// Nextjs API
// import FaqService from "@/services/faqService";

export default function HotSiteFAQ() {
  const [faqArray, setFaqArray] = useState<FaqResponse["data"] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const fetchFaqs = async () => {
    const url = new URL(window.location.href);
    // Netlify functions
    const response = await fetch(`${url}.netlify/functions/faqs`);
    const { data } = await response.json();

    // Nextjs API
    // const { data } = await FaqService.getFaqs(
    //   {
    //     "filters[area][name][$eq]": "Sobre",
    //     populate: "area",
    //   },
    //   "order:asc"
    // );

    setFaqArray(data);
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {faqArray?.map((faqItem, index) => (
        <FaqToggle
          onClick={() => {
            setOpenFaqIndex(openFaqIndex === index ? null : index);
          }}
          key={`${faqItem.id}-${index}`}
          faqItem={faqItem}
          open={openFaqIndex === index}
        />
      ))}
    </div>
  );
}

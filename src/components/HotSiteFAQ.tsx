import { useEffect, useState } from "react";

import { FaqResponse } from "@/types";
import { FaqToggle } from "./FaqToggle";

export default function HotSiteFAQ() {
  const [faqArray, setFaqArray] = useState<FaqResponse["data"] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const FetchFaqs = async () => {
    const response = await fetch("/api/faqs");

    const { data } = await response.json();

    setFaqArray(data);
  };

  useEffect(() => {
    FetchFaqs();
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

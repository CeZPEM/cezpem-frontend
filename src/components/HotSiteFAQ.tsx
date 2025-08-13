import { useEffect, useState } from "react";

import { FaqResponse } from "@/types";
import { FaqToggle } from "./FaqToggle";

// Nextjs API
import { FAQS } from "@/constants/faqs";

export default function HotSiteFAQ() {
  const [faqArray, setFaqArray] = useState<FaqResponse["data"] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const fetchFaqs = () => {
    setFaqArray(FAQS.data);
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
          key={faqItem.id}
          faqItem={faqItem}
          open={openFaqIndex === index}
        />
      ))}
    </div>
  );
}

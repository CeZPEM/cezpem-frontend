import { useEffect, useState } from "react";

import FaqService from "@/services/faqService";
import { FaqResponse } from "@/types";
import { FaqToggle } from "./FaqToggle";

export default function HotSiteFAQ() {
  const [faqArray, setFaqArray] = useState<FaqResponse["data"] | null>(null);

  const FetchFaqs = async () => {
    const { data } = await FaqService.getFaqs(
      {
        "filters[area][name][$eq]": "Sobre",
        populate: "area",
      },
      "order:asc"
    );

    setFaqArray(data);
  };

  useEffect(() => {
    FetchFaqs();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {faqArray?.map((faqItem, index) => (
        <FaqToggle key={index} {...faqItem} />
      ))}
    </div>
  );
}

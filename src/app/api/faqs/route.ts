import FaqService from "@/services/faqService";
import { FaqResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(): Promise<
  NextResponse<{ data: FaqResponse["data"] } | { error: string }>
> {
  try {
    const { data } = await FaqService.getFaqs(
      {
        "filters[area][name][$eq]": "Sobre",
        populate: "area",
      },
      "order:asc"
    );

    return NextResponse.json({ data });
  } catch (error: unknown) {
    console.error("Error fetching FAQs:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

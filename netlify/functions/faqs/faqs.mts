import { Context } from "@netlify/functions";
import FaqService from "../../../src/services/faqService";

const GET = async (request: Request, context: Context) => {
  if (!context) return;

  try {
    // for use with Nextjs API
    // const url = new URL(request.url);
    // const subject = url.searchParams.get("name") || "World";

    const { data } = await FaqService.getFaqs(
      {
        "filters[area][name][$eq]": "Sobre",
        populate: "area",
      },
      "order:asc"
    );

    return new Response(JSON.stringify({ data }));
  } catch (error: unknown) {
    console.error("Error fetching FAQs:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return new Response(errorMessage, {
      status: 500,
    });
  }
};

export default GET;

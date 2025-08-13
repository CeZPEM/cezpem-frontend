// replaced by constants/faqs.ts

/**
 * FaqService provides methods to interact with the FAQ API.

import { makeQueryString } from "@/functions";
import { FaqResponse } from "@/types";
import { httpClient } from "@/utils/httpClient";

const FaqService = {
  /**
   * Fetches FAQs from the API with optional filters and sorting.
   *
   * @param filters - An object containing key-value pairs to filter the FAQs.
   * @param sortByParam - A string specifying the sorting parameter.
   * @returns A promise that resolves to an FaqResponse object containing the FAQs.
   *
  async getFaqs(
    filters: Record<string, string> = {},
    sortByParam: string = ""
  ): Promise<FaqResponse> {
    // Implementation here
    const queryString = makeQueryString(filters);
    const sortBy = sortByParam ? `&sort=${sortByParam}` : "";

    const response = await httpClient<FaqResponse>(
      `/faqs?${queryString}${sortBy}`
    );

    return response;
  },
};

export default FaqService;
*/

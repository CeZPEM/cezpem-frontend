import { FaqResponse } from "@/types";
import { httpClient } from "@/utils/httpClient";

// /faqs?filters[area][name][$eq]=sobre&populate=area&sort=order:asc
const makeQueryString = (params: Record<string, string>) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};

const FaqService = {
  async getFaqs(
    filters: Record<string, string> = {},
    sortByParam: string = ""
  ): Promise<FaqResponse> {
    const queryString = makeQueryString(filters);
    const sortBy = sortByParam ? `&sort=${sortByParam}` : "";

    const response = await httpClient<FaqResponse>(
      `/faqs?${queryString}${sortBy}`
    );

    return response;
  },
};

export default FaqService;

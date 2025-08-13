/**
 * Service for handling course-related requests.

import { makeQueryString } from "@/functions";
import { CourseResponse } from "@/types";
import { httpClient } from "@/utils/httpClient";

const CourseService = {
  /**
   * Fetches FAQs based on provided filters and sorting parameters.
   *
   * @param {Record<string, string>} [filters={}] - An object containing filter key-value pairs.
   * @param {string} [sortByParam=""] - A string specifying the sorting parameter.
   * @returns {Promise<CourseResponse>} - A promise that resolves to the FAQ response.
   *
  async getCourses(
    filters: Record<string, string> = {},
    sortByParam: string = ""
  ): Promise<CourseResponse> {
    const queryString = makeQueryString(filters);
    const sortBy = sortByParam ? `&sort=${sortByParam}` : "";

    const response = await httpClient<CourseResponse>(
      `/courses?${queryString}${sortBy}`
    );

    return response;
  },
};

export default CourseService;
 */

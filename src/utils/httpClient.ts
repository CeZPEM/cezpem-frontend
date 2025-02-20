const BASE_API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://cms.cezpem.com.br/api";

export const httpClient = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const headers = new Headers({
    "Content-Type": "application/json", // Default Content-Type
    ...options.headers, // Include additional headers from options
  });

  const cleanUrl = `${BASE_API_URL}${endpoint}`
    .replace("v1//", "v1/")
    .replace("api//", "api/");

  const response = await fetch(cleanUrl, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw response;
  }

  const statusWithoutResponse = [204, 205, 304].includes(response?.status);

  if (!response?.body || statusWithoutResponse) {
    return {} as T;
  }

  return response.json() as Promise<T>;
};

export const makeQueryString = (params: Record<string, string>) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};

export const makeQueryString = (params: Record<string, string>) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};

export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes
    .filter(Boolean)
    .join(" ")
    .replace(/\n|\t/g, " ")
    .replace(/\s+/g, " ");
};

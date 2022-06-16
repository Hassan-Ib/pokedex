export const getPokemonIndexFromUrl = (url: string): string => {
  const splitedUrl = url.split("/");
  const len = splitedUrl.length;
  return splitedUrl[len - 2];
};

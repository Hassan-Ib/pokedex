export const getPokemonIndexFromUrl = (url: string): string => {
  const splitedUrl = url.split("/");
  const len = splitedUrl.length;
  return splitedUrl[len - 2];
};

export const generateImageUrl = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

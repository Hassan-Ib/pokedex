export type TPokemon = {
  name: string;
  url: string;
};

export type TPageUrl = string | null;

export type TPokemonData = {
  count: number;
  next: TPageUrl;
  previous: TPageUrl;
  results: TPokemon[];
};

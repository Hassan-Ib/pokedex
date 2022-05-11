export type TPokemon = {
  name: string;
  url: string;
  // id: number;
};

export type TpokemonAbility = TPokemon;

export type TPageUrl = string | null;

export type TPokemonData = {
  count: number;
  next: TPageUrl;
  previous: TPageUrl;
  results: TPokemon[];
};

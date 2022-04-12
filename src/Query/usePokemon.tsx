import React from "react";
import { useQuery } from "react-query";
import axios from "./axios";

// type PokemonInfo : {

// }
const fetchPokemon = (pokemonId: string | number) =>
  axios.get(`/pokemon/${pokemonId}`).then((res) => res.data);

type Props = {
  pokemonId: string;
};

const usePokemon = ({ pokemonId }: Props) => {
  return useQuery(["pokemon", pokemonId], () => fetchPokemon(pokemonId));
};

export default usePokemon;

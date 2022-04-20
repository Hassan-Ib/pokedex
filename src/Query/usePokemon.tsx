import { useQuery } from "react-query";
import axios from "./axios";

// type PokemonInfo : {

// }
const fetchPokemon = (pokemonId: string | number) =>
  axios.get(`/pokemon/${pokemonId}`).then((res) => res.data);

const usePokemon = (pokemonId: string = "") => {
  return useQuery(["pokemon", pokemonId], () => fetchPokemon(pokemonId));
};

export default usePokemon;

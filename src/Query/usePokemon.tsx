import { useQuery } from "react-query";
import axios from "./axios";

type TPokemon = {
  name: string;
  url: string;
};

type TPokemonData = {
  count: number;
  next: string;
  previous: string;
  results: TPokemon[];
};

const fetchPokemon = (): Promise<TPokemonData> =>
  axios.get("pokemon?limit=10").then((res) => res.data);

export default function usePokemon() {
  return useQuery("pokemon", fetchPokemon);
}

import axios from "./axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
type Props = {};
const url = "pokemon?limit=100000&offset=0";

const fetchPokemon = (url: string) => {
  return axios.get(url).then((res) => res.data);
};
const useAllPokemons = (props: Props) => {
  const { data, isError, isLoading, error } = useQuery(
    ["allpokemon"],
    () => fetchPokemon(url),
    {
      staleTime: Infinity,
    }
  );
  const queryClient = useQueryClient();
  console.log(data.length);
  console.log(queryClient);

  return { data, isError, isLoading, error };
};

export default useAllPokemons;

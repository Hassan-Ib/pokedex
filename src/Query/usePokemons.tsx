import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { TPageUrl, TPokemonData } from "../utils/Types";
import { useLocalStorage } from "usehooks-ts";

import axios from "./axios";

const POKEMON_LIMIT_PER_PAGE = 10;
const fetchPokemon = (url: string): Promise<TPokemonData> =>
  axios.get(url).then((res) => res.data);

export default function usePokemons() {
  const queryClient = useQueryClient();
  const [pageUrl, setPageUrl] = useLocalStorage(
    "pokePage",
    `pokemon?limit=${POKEMON_LIMIT_PER_PAGE}`
  );
  const { data, isError, isLoading, error } = useQuery(
    ["pokemons", pageUrl],
    () => fetchPokemon(pageUrl),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    }
  );

  const changePage = (url: TPageUrl) => {
    setPageUrl(url ?? "");
  };

  // console.log(data);

  // prefetch next page
  useEffect(() => {
    if (data?.next) {
      queryClient.prefetchQuery(["pokemon", data?.next], () =>
        fetchPokemon(data?.next ?? "")
      );
    }
  }, [data, pageUrl, queryClient]);

  return { changePage, data, isError, isLoading, error };
}

import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "./axios";

type TPokemon = {
  name: string;
  url: string;
};
type TPageUrl = string | null;

type TPokemonData = {
  count: number;
  next: TPageUrl;
  previous: TPageUrl;
  results: TPokemon[];
};

const fetchPokemon = (url: string): Promise<TPokemonData> =>
  axios.get(url).then((res) => res.data);

export default function usePokemon() {
  const queryClient = useQueryClient();
  const [pageUrl, setPageUrl] = useState("pokemon?limit=20");
  const { data, isError, isLoading, error } = useQuery(
    ["pokemon", pageUrl],
    () => fetchPokemon(pageUrl),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );

  const changePage = (url: TPageUrl) => {
    setPageUrl(url ?? "");
  };

  console.log(data);

  // useEffect(() => {

  //   if (typeof data?.next === "string") {
  //     queryClient.prefetchQuery(["pokemon", pageUrl], () =>
  //       fetchPokemon(data?.next)
  //     );
  //   }
  // }, [data, pageUrl, queryClient]);

  return { changePage, data, isError, isLoading, error };
}

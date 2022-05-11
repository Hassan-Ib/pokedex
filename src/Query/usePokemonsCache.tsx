import axios from "./axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
// type Props = {};
const url = "pokemon?limit=100000&offset=0";

const fetchPokemon = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};
const usePokemonsCache = () => {
  const { data, isError, isLoading, error } = useQuery(
    "allpokemon",
    () => fetchPokemon(url),
    {
      staleTime: Infinity,
    }
  );
  return { data, isError, isLoading, error };
};

export default usePokemonsCache;

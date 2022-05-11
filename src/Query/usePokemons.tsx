import { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import type { TPokemonData, TPokemon } from "../utils/Types";
import { useLocalStorage } from "usehooks-ts";
import usePokemonsCache from "./usePokemonsCache";
import axios from "./axios";

const POKEMON_LIMIT_PER_PAGE = 10;
const fetchPokemon = (url: string): Promise<TPokemonData> =>
  axios.get(url).then((res) => res.data);

const initalPath = { page: 1, skip: 0, limit: POKEMON_LIMIT_PER_PAGE };
// getting data from useQueryClient

const usePokemonsQuery = () => {
  const queryClient = useQueryClient();

  // keep track of the current page
  const [pageData, setPageData] = useLocalStorage("pokePageData", {
    page: 1,
    skip: 0,
    limit: POKEMON_LIMIT_PER_PAGE,
  });

  // console.log("pageData", pageData);
  // fetching all pokemons into cache
  const { isLoading, data: pokemon, error, isError } = usePokemonsCache();

  // method to fetch next page or previous page
  const page = {
    currentPage: pageData.page,
    pages_Left: Math.ceil(pokemon?.count / POKEMON_LIMIT_PER_PAGE),
    previous: pageData.page > 1, // previous page is not available if page is 1
    next: pageData.page < pokemon?.count / POKEMON_LIMIT_PER_PAGE, // next page is not available if page is last page
    toNextPage: () => {
      setPageData((prevPage) => {
        const skip = prevPage.skip + POKEMON_LIMIT_PER_PAGE;
        const page = prevPage.page + 1;
        return { ...prevPage, skip, page };
      });
    },
    toPrevPage: () => {
      setPageData((prevPage) => {
        const skip = prevPage.skip - POKEMON_LIMIT_PER_PAGE;
        const page = prevPage.page - 1;
        return { ...prevPage, skip, page };
      });
    },
  };

  // fetching data from cache
  let data: TPokemon[] = pokemon;

  // if data in cache, flatten the data
  if (pokemon && pokemon.results) {
    data = pokemon.results.slice(
      pageData.skip,
      pageData.skip + POKEMON_LIMIT_PER_PAGE
    );
  }

  return { page, data, isError, isLoading, error };
};

export default usePokemonsQuery;

import React, { useEffect } from "react";
import usePokemonsCache from "./usePokemonsCache";
import type { TPokemon } from "../utils/Types";

const useSearchPokemon = () => {
  const { data: pokemons, error, isError, isLoading } = usePokemonsCache();
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<TPokemon[] | []>([]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput === "") {
      setSearchResults([]);
      return;
    }

    if (pokemons && pokemons.results) {
      const results = pokemons.results.filter((pokemon: TPokemon) => {
        return pokemon.name.startsWith(searchInput.toLowerCase());
      });
      setSearchResults(results);
    }
  }, [searchInput, pokemons]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {
    data: searchResults,
    handleSearchInputChange,
    isLoading,
    isError,
    error,
    handleFormSubmit,
    searchInput,
  };
};

export default useSearchPokemon;

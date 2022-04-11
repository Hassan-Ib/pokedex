import React from "react";
import axios from "./axios";

type Props = {};

const fetchPokemon = (pokemonId: string | number) =>
  axios.get(`/pokemon/${pokemonId}`);

const usePokemon = () => {
  return <div>usePokemon</div>;
};

export default usePokemon;

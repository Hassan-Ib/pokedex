import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useSearchPokemon from "../Query/useSearchPokemon";
import PokemonSearchList from "./PokemonSearchList";
const responseData = ["bladamur", "dragon", "markinru", "musakabi"];

type Props = {
  closeModal: () => void;
};

const Search = (props: Props) => {
  const {
    isLoading,
    data,
    error,
    isError,
    handleSearchInputChange,
    handleFormSubmit,
    searchInput,
  } = useSearchPokemon();

  return (
    <div className="absolute shadow-xl top-36 w-[90%] bg-white max-w-xl left-1/2 -translate-x-1/2 rounded">
      <form
        onSubmit={handleFormSubmit}
        name="search pokemon"
        className=" border-b border-black/20  flex items-center  px-4 p-3 gap-2"
      >
        <AiOutlineSearch className="  text-2xl opacity-50 mt-1" />{" "}
        <label htmlFor="search" className="absolute invisible"></label>
        <input
          className=" w-full text-xl foucs:outline-none outline-none placeholder:text-lg placeholder:tracking-wider"
          type="text"
          name="pokemon"
          id="search"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="search pokemon by name only "
        />
        {/* <span className="error">{"make sure you enter correct name"}</span> */}
        <button
          className="p-1 text-[10px] border border-black rounded bg-gray-50"
          type="button"
          name="escape search modal"
          aria-label="escape search modal"
          onClick={() => {
            props.closeModal();
          }}
        >
          ESC
        </button>
      </form>
      <PokemonSearchList results={data} />
    </div>
  );
};

export default Search;

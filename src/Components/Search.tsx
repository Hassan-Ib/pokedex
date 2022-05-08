import React from "react";
import ResponseElement from "./ResponseElement";
import { AiOutlineSearch } from "react-icons/ai";
import useModal from "../Query/useModal";

const responseData = ["bladamur", "dragon", "markinru", "musakabi"];

type Props = {
  closeModal: () => void;
};

const Search = (props: Props) => {
  return (
    <div className="absolute  shadow-xl top-36 w-[80%] bg-white max-w-xl left-1/2 -translate-x-1/2 rounded">
      <form
        name="search pokemon"
        className=" border-b border-black/20  flex items-center  px-4 p-3 gap-2"
      >
        <AiOutlineSearch className="  text-2xl opacity-50 mt-1" />{" "}
        <input
          className=" w-full text-xl foucs:outline-none outline-none"
          type="text"
          name="pokemon"
          id="pokemon"
          placeholder="search pokemon"
        />
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
      <section className="px-4 pt-3 pb-6 min-h-[300px] max-h-[300px] overflow-y-auto">
        <h5 className="text-xl mb-3">Results</h5>
        <ul className="flex flex-col gap-4">
          {responseData.map((pokeName) => (
            <li key={pokeName} className="rounded-md  capitalize">
              <ResponseElement responseValue={pokeName} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Search;

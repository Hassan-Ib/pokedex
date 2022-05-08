import React from "react";
import ResponseElement from "./ResponseElement";
import { AiOutlineSearch } from "react-icons/ai";
import useModal from "../Query/useModal";

type Props = {
  closeModal: () => void;
};

const Search = (props: Props) => {
  return (
    <div className="absolute min-h-[300px] shadow-xl top-36 w-[80%] bg-white max-w-xl left-1/2 -translate-x-1/2 rounded">
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
      <section className="px-4 py-2">
        <h5 className="text-xl mb-3">Results</h5>
        <ul className="flex flex-col gap-4">
          <li className="rounded-md  ">
            <ResponseElement responseValue={"Bluesamor"} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Search;

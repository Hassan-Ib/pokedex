import React from "react";
import Modal from "./Modal";
import ResponseElement from "./ResponseElement";
import { AiOutlineSearch } from "react-icons/ai";
import useModal from "../Query/useModal";

type Props = {};

const Search = (props: Props) => {
  const { isModalOpen, closeModal } = useModal();
  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="absolute min-h-[300px] shadow-xl top-36 w-[80%] bg-white max-w-xl left-1/2 -translate-x-1/2">
        <form
          name="search pokemon"
          className=" border-b border-black  flex items-center  px-4 p-3 gap-2"
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
              closeModal();
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
    </Modal>
  );
};

export default Search;

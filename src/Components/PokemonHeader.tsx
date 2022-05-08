import useModal from "../Query/useModal";
import { BiSearch } from "react-icons/bi";
import Search from "./Search";
import Modal from "./Modal";

const PokemonHeader = () => {
  const { openModal, isModalOpen, closeModal } = useModal();
  // const;
  return (
    <header className="flex justify-between items-center p-4">
      <div className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemon logo"
          className="w-full h-[60px] object-contain object-center"
        />
      </div>
      <div>
        <button
          aria-label="search pokemon"
          onClick={() => {
            openModal();
          }}
          className=" shadow-inner bg-gray-100 border border-black flex gap-1 items-center rounded-3xl px-4 py-1 justify-start opacity-50"
        >
          <BiSearch aria-label="search icon" className="mt-1 opacity-80" />{" "}
          <span className=""> search </span>
          <span
            aria-label="keyboard shortcut to open seacrh - control or command key + k key "
            className="text-[9px] border border-black ml-5 p-[2px] rounded bg-gray-50"
          >
            Cltr K
          </span>
        </button>
        <Modal
          openModal={openModal}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        >
          <Search closeModal={closeModal} />
        </Modal>
      </div>
    </header>
  );
};

export default PokemonHeader;

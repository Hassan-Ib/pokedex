import useModal from "../Query/useModal";
import { BiSearch } from "react-icons/bi";
import Search from "./Search";
const PokemonHeader = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
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
          onClick={() => {
            openModal();
          }}
          className=" shadow-inner bg-gray-100 border border-black flex gap-1 items-center rounded-3xl px-4 py-2 justify-start opacity-50"
        >
          <BiSearch className="mt-1 opacity-80" />{" "}
          <span className=""> search </span>
          <span className="text-[11px] border border-black ml-5 p-[3px] rounded bg-gray-50">
            Cltr K
          </span>
        </button>
        <Search />
      </div>
    </header>
  );
};

export default PokemonHeader;

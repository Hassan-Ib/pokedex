import React from "react";
import { BiSearch } from "react-icons/bi";
type Props = {};

const HeaderLoader = (props: Props) => {
  return (
    <div>
      <div className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemon logo"
          className="w-full h-[48px] sm:h-[65px] min-w-[150px] object-contain object-left"
        />
      </div>
      <div>
        <button
          aria-label="search pokemon"
          className=" shadow-inner bg-gray-100 border border-black flex gap-1 items-center rounded-3xl px-4 py-1 justify-start opacity-70">
          <BiSearch aria-label="search icon" className="mt-1 " />{" "}
          <span className=""> search </span>
          <div
            aria-label="keyboard command to open search modal "
            className=" hidden md:block ml-5 text-xs">
            <span
              aria-label="control key"
              className=" border border-black px-1 p-[2px] rounded bg-gray-50">
              Cltr
            </span>
            <span className="mx-1">or</span>
            <span
              aria-label="command key"
              className=" border border-black px-1 p-[2px] rounded bg-gray-50">
              Cmd
            </span>
            <span className="mx-1">+</span>
            <span
              aria-label="k key "
              className=" border border-black px-2 p-[2px] rounded bg-gray-50">
              k
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeaderLoader;

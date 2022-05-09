import React from "react";
// import { FaSlackHash } from "react-icons/fa";
// import { CgPokemon } from "react-icons/cg";
// import { MdCatchingPokemon } from "react-icons/md";
// import { SiPokemon } from "react-icons/si";
import { GiPokerHand } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  responseValue: React.ReactNode;
};

const ResponseElement = ({ responseValue }: Props) => {
  return (
    <>
      <a
        href="#"
        onMouseEnter={(e) => {
          console.log("hover");
          // e.currentTarget.focus();
        }}
        className="group outline-none  bg-blue-500/70 text-white rounded-md flex items-center gap-3 py-3 w-full px-4 focus:bg-blue-500"
      >
        {" "}
        <GiPokerHand className="animate-bounce group-focus:border-white group-hover:border-white font-thin text-2xl  rounded" />
        <span className="flex-1 text-lg font-semibold tracking-wider ">
          {" "}
          {responseValue}
        </span>
        <MdKeyboardArrowRight />
      </a>
    </>
  );
};

export default ResponseElement;

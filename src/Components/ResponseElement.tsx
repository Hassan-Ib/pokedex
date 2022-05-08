import React from "react";
import { FaSlackHash } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  responseValue: React.ReactNode;
};

const ResponseElement = ({ responseValue }: Props) => {
  return (
    <a
      href="#"
      onMouseEnter={(e) => {
        console.log("hover");
        // e.currentTarget.focus();
      }}
      className="group outline-none border border-black/60 rounded-md flex items-center gap-2 py-2 w-full px-3 focus:bg-blue-500 focus:border-blue-500  focus:text-white"
    >
      {" "}
      <FaSlackHash className="border border-black group-focus:border-white group-hover:border-white p-1 text-2xl rounded" />
      <span className="flex-1 text-lg font-bold"> {responseValue}</span>
      <MdKeyboardArrowRight />
    </a>
  );
};

export default ResponseElement;

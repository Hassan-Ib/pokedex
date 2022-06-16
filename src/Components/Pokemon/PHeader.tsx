import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
};

const PokemonHeader = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex justify-between items-center">
        <button
          aria-label="back to previous page "
          onClick={() => navigate("/")}>
          <MdArrowBackIosNew className="text-xl" />
        </button>
        <p className=" font-semibold text-lg"> #{props.id} </p>
        <BsFillSuitHeartFill className="text-xl" />
      </section>
    </>
  );
};

export default PokemonHeader;

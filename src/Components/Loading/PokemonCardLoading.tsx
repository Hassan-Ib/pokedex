import React from "react";
import { CgPokemon } from "react-icons/cg";
const PokemonCardLoading = () => {
  return (
    <>
      <div
        className={`flex flex-col p-4 gap-4 max-w-[300px] min-w-[260px] sm:w-[270px] mx-auto md:w-[290px] rounded-3xl transition-all duration-500 overflow-hidden border`}
      >
        <article className="flex  gap-2 relative">
          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="w-full animate-pulse rounded-md  h-6 relative z-10 bg-gray-900"></h1>
            <h1 className="w-[80%] animate-pulse rounded-md  h-6 relative z-10 bg-gray-900"></h1>
            <h1 className="w-[60%] animate-pulse rounded-md  h-6 relative z-10 bg-gray-900"></h1>
          </div>

          <figure className="relative flex-1  rounded-md">
            <img
              src="https://i.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png"
              alt="pokemon silhouette"
              className="block h-[120px] animate-pulse  opacity-80"
            />
          </figure>
          <CgPokemon className="absolute text-[24rem] bottom-0 opacity-20  right-0" />
        </article>
      </div>
    </>
  );
};

export default PokemonCardLoading;

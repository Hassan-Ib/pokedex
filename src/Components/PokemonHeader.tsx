import React from "react";

const PokemonHeader = () => {
  return (
    <header className="App-header flex flex-col justify-center items-center ">
      <div className=" h-[150px]">
        <img
          src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
          alt="pokemon logo"
          className="w-full h-full object-contain object-center"
        />
      </div>
    </header>
  );
};

export default PokemonHeader;

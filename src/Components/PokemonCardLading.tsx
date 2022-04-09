import React from "react";

const PokemonCardLading = () => {
  return (
    <div className="animate-pulse shadow border border-slate-800 flex flex-col items-center p-8 py-2 gap-4 min-w-[260px] w-[320px] rounded-md">
      {/* image */}
      <div className="h-[250px] w-full bg-slate-800 rounded-md"></div>
      {/* name */}
      <p className="h-10 w-36 bg-slate-800 rounded"></p>
      {/* button */}
      <button className=" animate-bounce h-8 w-16 bg-slate-800 rounded-sm"></button>
    </div>
  );
};

export default PokemonCardLading;

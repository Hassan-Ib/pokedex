import PokemonCardLoading from "./PokemonCardLoading";

const PokemonListLoading = () => {
  return (
    <main className="grid grid-flow-col items-center justify-between px-4 w-full border-2 border-red-500">
      <button disabled={true} className="btn">
        prev
      </button>
      <ul className="py-6 h-[400px] col-start-3  flex flex-wrap w-[90%] max-w-3xl mx-auto justify-center items-center gap-8">
        <PokemonCardLoading />
        <PokemonCardLoading />
      </ul>
      <button disabled={true} className="btn">
        next
      </button>
    </main>
  );
};

export default PokemonListLoading;

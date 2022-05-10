import PokemonCardLoading from "./PokemonCardLoading";

const PokemonListLoading = () => {
  return (
    <main className="">
      <ul className="md:scroll-effect py-6 pt-2 flex flex-col sm:flex-row w-[95%] max-w-5xl flex-wrap md:flex-nowrap  sm:justify-center items-stretch md:justify-start md:overflow-auto mx-auto  gap-6">
        <PokemonCardLoading />
        <PokemonCardLoading />
        <PokemonCardLoading />
        <PokemonCardLoading />
      </ul>
    </main>
  );
};

export default PokemonListLoading;

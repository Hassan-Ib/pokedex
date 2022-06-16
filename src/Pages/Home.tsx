import usePokemons from "../Query/usePokemons";
import PokemonHeader from "../Components/Header";
import PokemonListLoading from "../Components/Loader/PokemonListLoading";
import PokemonList from "../Components/Card/PokemonList";
import NavigationBtn from "../Components/NavigationBtn";
import { BsInfoCircle } from "react-icons/bs";
import PokemonIntroCard from "../Components/Intro";
const Home = () => {
  const { page, isError, isLoading, data, error } = usePokemons();

  if (isLoading)
    return (
      <div className="px-2 sm:px-4">
        <PokemonHeader />
        <PokemonIntroCard />
        <PokemonListLoading />
      </div>
    );

  // || !data for type narrowing and handling error state
  if (isError || !data) {
    return (
      <div className="h-screen flex flex-col justify-center items-center ">
        <PokemonHeader />
        <h1 className="text4xl font-medium ">
          Something went horrible wrong :)
        </h1>
      </div>
    );
  }

  return (
    <main className="main lg:h-[100vh] overflow-auto px-4 pb-4">
      <PokemonHeader />
      <PokemonIntroCard />
      <PokemonList result={data} />
      <div className="flex gap-2 justify-center items-center mt-6">
        <NavigationBtn
          navigate="prev"
          disabled={!page.previous}
          onClick={page.toPrevPage}
        />
        <span className="text-lg font-medium  px-3 py-1">
          {page.currentPage}
        </span>
        <span className="text-lg font-medium"> of </span>
        <span className="text-lg font-medium  px-3 py-1">
          {page.pages_Left}
        </span>
        <NavigationBtn
          navigate="next"
          disabled={!page.next}
          onClick={page.toNextPage}
        />
      </div>
    </main>
  );
};

export default Home;

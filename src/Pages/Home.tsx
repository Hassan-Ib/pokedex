import usePokemons from "../Query/usePokemons";
import PokemonHeader from "../Components/PokemonHeader";
import PokemonListLoading from "../Components/Loading/PokemonListLoading";
import PokemonList from "../Components/PokemonList";
import NavigationBtn from "../Components/NavigationBtn";
import { BsInfoCircle } from "react-icons/bs";
import PokemonIntroCard from "../Components/PokemonIntroCard";
const Home = () => {
  const { changePage, isError, isLoading, data, error } = usePokemons();
  // console.log(data?.next, data?.previous);

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
    console.log(error, data);
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
    <main className="main lg:h-[100vh] overflow-auto px-4">
      <PokemonHeader />
      <PokemonIntroCard />
      <PokemonList result={data.results} />
    </main>
  );
};

export default Home;

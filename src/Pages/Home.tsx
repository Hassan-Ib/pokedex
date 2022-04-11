import usePokemons from "../Query/usePokemons";
import PokemonHeader from "../Components/PokemonHeader";
import PokemonListLoading from "../Components/Loading/PokemonListLoading";
import PokemonList from "../Components/PokemonList";
import NavigationBtn from "../Components/NavigationBtn";
const Home = () => {
  const { changePage, isError, isLoading, data, error } = usePokemons();
  // console.log(data?.next, data?.previous);

  if (isLoading)
    return (
      <div className="flex flex-col  items-center justify-center h-screen">
        <PokemonHeader />
        <PokemonListLoading />
      </div>
    );

  // || !data for type narrowing and handling error state
  if (isError || !data) {
    console.log(error, data);
    return (
      <div className="h-screen flex flex-col  justify-center items-center ">
        <PokemonHeader />
        <h1 className="text4xl font-medium ">
          Something went horrible wrong :)
        </h1>
      </div>
    );
  }

  return (
    <main className="bg-slate-100 flex items-center justify-around py-2  px-4 gap-2 ">
      <NavigationBtn
        onClick={() => changePage(data.previous)}
        disabled={!data.previous}
        navigate="prev"
        className=" fixed top-1/2 -translate-y-1/2 left-4"
      />
      <PokemonList result={data.results} />
      <NavigationBtn
        onClick={() => changePage(data.next)}
        disabled={!data.next}
        navigate="next"
        className=" fixed top-1/2 -translate-y-1/2 right-4"
      />
    </main>
  );
};

export default Home;

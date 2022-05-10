import usePokemons from "../Query/usePokemons";
import PokemonHeader from "../Components/PokemonHeader";
import PokemonListLoading from "../Components/Loading/PokemonListLoading";
import PokemonList from "../Components/PokemonList";
import NavigationBtn from "../Components/NavigationBtn";
import { BsInfoCircle } from "react-icons/bs";
import background_1 from "../assets/images/background/pokemon-background-1.webp";
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
    <main className="main relative lg:h-[100vh] overflow-auto px-4">
      <section className="absolute inset-0 hidden lg:flex -z-20">
        <div className="basis-[55%] bg-white"></div>
        <div className="bg-clip basis-[60%] bg-[#6284d8]">
          <img
            src={background_1}
            alt="pokemon background"
            className="w-full h-full object-contain object-center"
          />
          {/* <img src="" alt="" /> */}
        </div>
      </section>
      <PokemonHeader />
      <section className="mt-16 max-w-xl mx-auto mb-16 lg:mx-px">
        <article className="text-center lg:text-left flex flex-col gap-8  items-center lg:items-start">
          <h2 className="text-5xl md:text-6xl font-semibold">
            Gotta Catch 'Em All!
          </h2>
          <p>
            Pokemons, akas Pucket Monsters in Japan, is a Japanesse media
            franchise managed by the Pokémons Company, a company founded by
            Nintendo
          </p>
          <button className="flex lg:self-start items-center font-semibold gap-2 bg-black text-white px-4 py-2 rounded-md">
            {" "}
            <BsInfoCircle /> More information
          </button>
        </article>
      </section>
      <PokemonList result={data.results} />
    </main>
  );
};

export default Home;

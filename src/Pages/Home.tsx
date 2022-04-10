import usePokemon from "../Query/usePokemon";
import PokemonCard from "../Components/PokemonCard";
import { getPokemonIndexFromUrl } from "../utils/Pokemon";
import PokemonCardLading from "../Components/PokemonCardLading";

const Home = () => {
  const { changePage, isError, isLoading, data, error } = usePokemon();
  console.log(data?.next, data?.previous);
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <PokemonCardLading />
      </div>
    );
  if (isError)
    return (
      <div className="h-screen flex  justify-center items-center ">
        {/* Something went horrible wrong */}
        <PokemonCardLading />
      </div>
    );
  return (
    <div className="App bg-slate-100 pb-10">
      <header className="App-header flex flex-col justify-center items-center ">
        <div className=" h-[200px]">
          <img
            src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
            alt="pokemon logo"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </header>
      <main className="flex  items-center px-4 ">
        <button
          onClick={() => {
            changePage(data?.previous ?? "");
          }}
          disabled={!data?.previous}
          className="btn">
          prev
        </button>

        <ul className="scroll-effect overflow-y-scroll py-6 h-[400px] flex flex-wrap w-[90%] max-w-3xl mx-auto justify-center items-center gap-8">
          {data?.results.map((pokemon) => {
            const id = getPokemonIndexFromUrl(pokemon.url);
            return (
              <li key={id}>
                <PokemonCard id={id} {...pokemon} />
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            changePage(data?.next ?? "");
          }}
          disabled={!data?.next}
          className="btn">
          next
        </button>
      </main>
    </div>
  );
};

export default Home;

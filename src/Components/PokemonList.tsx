import { getPokemonIndexFromUrl } from "../utils/Pokemon";
import PokemonCard from "./PokemonCard";
import { TPokemon } from "../utils/Types";
import PokemonHeader from "./PokemonHeader";
const PokemonList = ({ result }: { result: TPokemon[] }) => {
  return (
    <section className=" ">
      <PokemonHeader />
      <ul className=" py-6 pt-2  flex flex-wrap w-[90%] max-w-5xl mx-auto justify-around items-center gap-6">
        {result.map((pokemon) => {
          const id = getPokemonIndexFromUrl(pokemon.url);
          return (
            <li key={id}>
              <PokemonCard id={id} {...pokemon} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PokemonList;

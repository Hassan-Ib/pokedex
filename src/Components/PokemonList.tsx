import { getPokemonIndexFromUrl } from "../utils/Pokemon";
import { TPokemon } from "../utils/Types";
import PokemonCard from "./PokemonCard";
// import background_1 from "../assets/images/background/pokemon-background-1.webp";
// import background_2 from "../assets/images/background/pokemon-background-2.webp";
// import background_3 from "../assets/images/background/pokemon-background-3.png";
// import background_4 from "../assets/images/background/pokemon-background-4.png";
const PokemonList = ({ result }: { result: TPokemon[] }) => {
  // console.log(result);
  return (
    <section className="">
      <ul className=" py-6 pt-2 flex w-[90%] max-w-5xl overflow-auto mx-auto  gap-6">
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

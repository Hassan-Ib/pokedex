import PokemonListLoading from "../Loader/PokemonListLoading";
import HeaderLoader from "../Loader/HeaderLoader";
import PokemonIntroCard from "../Intro";

export default function HomeLoader() {
  return (
    <div className="px-2 sm:px-4">
      <HeaderLoader />
      <PokemonIntroCard />
      <PokemonListLoading />
    </div>
  );
}

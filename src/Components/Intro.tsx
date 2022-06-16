import { BsInfoCircle } from "react-icons/bs";

const PokemonIntroCard = () => (
  <section className="max-w-xl mx-auto my-16">
    <article className="text-center flex flex-col gap-8  items-center ">
      <h2 className="text-5xl md:text-6xl font-semibold">
        Gotta Catch 'Em All!
      </h2>
      <p>
        Pokemons, akas Pucket Monsters in Japan, is a Japanesse media franchise
        managed by the Pokémons Company, a company founded by Nintendo
      </p>
      <button
        disabled={true}
        className="flex items-center font-semibold gap-2 bg-black text-white px-4 py-2 rounded-md"
      >
        {" "}
        <BsInfoCircle /> More information
      </button>
    </article>
  </section>
);

export default PokemonIntroCard;

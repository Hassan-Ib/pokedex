import type { TPokemon } from "../utils/Types";
import ResponseElement from "./ResponseElement";

type Props = {
  results: TPokemon[];
};

const PokemonSearchList = ({ results }: Props) => {
  return (
    <section className="px-4 pt-3 pb-6 min-h-[300px] max-h-[400px] overflow-y-auto">
      <h5 className="text-xl mb-3">Results</h5>
      <ul className="flex flex-col gap-4">
        {results.map((pokeName: TPokemon) => (
          <li key={pokeName.name} className="rounded-md  capitalize">
            <ResponseElement responseValue={pokeName.name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PokemonSearchList;

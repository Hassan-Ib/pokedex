import type { TPokemon } from "../../utils/Types";
import ResponseElement from "../ResponseElement";

type Props = {
  results: TPokemon[];
};

const PokemonSearchList = ({ results }: Props) => {
  return (
    <section className="px-4 pt-3 pb-6 min-h-[270px] max-h-[350px] overflow-y-auto">
      <h5 className="text-xl mb-3">Results</h5>
      {results.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {results.map((pokeName: TPokemon) => (
            <li key={pokeName.name} className="rounded-md  capitalize">
              <ResponseElement responseValue={pokeName.name} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-32 flex items-center justify-center">
          {" "}
          "no results found"{" "}
        </div>
      )}
    </section>
  );
};

export default PokemonSearchList;

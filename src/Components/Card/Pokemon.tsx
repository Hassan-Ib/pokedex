import React from "react";
import { useNavigate } from "react-router-dom";
import { generateImageUrl } from "../../utils/generateImageUrl";
import { Link } from "react-router-dom";
import RandomRgbColor from "../../utils/randomColor";
import axios from "../../Query/axios";
import type { TPokemon, TPokemonAbility } from "../../utils/Types";
import { CgPokemon } from "react-icons/cg";
export type Props = {
  name: string;
  url: string;
  id: string;
};

const PokemonCard = ({ name, url, id }: TPokemon & { id: string }) => {
  const [abilities, setAbilities] = React.useState<string[]>([]);
  const randomColor = new RandomRgbColor();
  const oppositebackgroundColor = randomColor.getLighterColor();

  React.useEffect(() => {
    axios(`pokemon/${id}`).then((res) => {
      const data = res.data;
      const abilities = data.abilities
        .map(({ ability }: { ability: TPokemonAbility }) => {
          return ability.name;
        })
        .slice(0, 2);
      setAbilities(abilities);
    });
  }, []);

  return (
    <Link
      style={{
        backgroundColor: randomColor.getColor(),
      }}
      to={`/pokemon/${id}`}
      className={`flex flex-col p-4 gap-4 max-w-[300px] min-w-[260px] sm:w-[270px] mx-auto md:w-[290px] rounded-3xl transition-all duration-500 overflow-hidden`}>
      <article className="flex ">
        <div className=" flex  flex-col gap-2 relative z-10">
          <h1
            style={{
              backgroundColor: oppositebackgroundColor,
            }}
            className="text-white px-2 py-1 text-base self-start rounded-md font-bold uppercase tracking-widest ">
            {name}
          </h1>

          {abilities.map((ability, key) => (
            <h3
              key={key}
              style={{
                backgroundColor: oppositebackgroundColor,
              }}
              className="text-white px-2 py-1 text-sm max-w-max rounded-xl  capitalize tracking-widest">
              {ability}
            </h3>
          ))}
        </div>
        <figure className="relative flex-1">
          <img
            src={generateImageUrl(id)}
            alt={name}
            className="block h-[150px] sm:h-[120px]  relative z-10"
          />
          <CgPokemon className="absolute text-[24rem] bottom-0 opacity-40  right-0" />
        </figure>
      </article>
    </Link>
  );
};

export default PokemonCard;

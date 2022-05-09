import React from "react";
import { useNavigate } from "react-router-dom";
import { generateImageUrl } from "../utils/Pokemon";
import { Link } from "react-router-dom";
import { randomRgba, oppositeRgb } from "../utils/Theme";
import axios from "../Query/axios";
import { CgPokemon } from "react-icons/cg";
type Props = {
  name: string;
  url: string;
  id: string;
};

const bgWithOpacity = ([r, g, b, a]: number[]) => `rgba(${r},${g},${b},${a})`;

const backgroundColor = ([r, g, b]: number[]) => `rgb(${r},${g},${b})`;

const PokemonCard = ({ name, url, id }: Props) => {
  const navigate = useNavigate();
  const rgb = randomRgba();

  console.log(url);
  const opposite = oppositeRgb(rgb);

  const oppositebackgroundColor = backgroundColor(opposite);
  React.useEffect(() => {
    axios(`pokemon/${id}`).then((res) => {
      const data = res.data;
      console.log(data);
    });
  }, []);

  return (
    <article
      style={{
        backgroundColor: backgroundColor(rgb),
      }}
      className={`flex flex-col items-center p-4  gap-4 w-[320px] rounded-3xl transition-all duration-500 overflow-hidden`}
    >
      <Link to={`/pokemon/${id}`} className="flex ">
        <h1 className="text-white self-start text-lg py-1 rounded-md font-bold uppercase tracking-widest relative z-10">
          {name}
        </h1>
        <figure className="relative flex-1">
          <img
            src={generateImageUrl(id)}
            alt={name}
            className="block h-[150px] relative z-10"
          />
          <CgPokemon className="absolute text-[24rem] bottom-0 opacity-40  right-0" />
          {/* <figcaption>
            <h1
              style={{
                backgroundColor: oppositebackgroundColor,
                borderColor: oppositebackgroundColor,
              }}
              className="text-white text-xl px-4 py-1 rounded-md text-center font-extrabold uppercase tracking-widest"
            >
              {name}
            </h1>
          </figcaption> */}
        </figure>
      </Link>

      {/* <button
        style={{
          backgroundColor: oppositebackgroundColor,
          borderColor: oppositebackgroundColor,
        }}
        onClick={() => navigate(`/pokemon/${id}`)}
        className=" animate-bounce px-4 py-2 tracking-widest rounded-3xl border shadow-lg border-white text-white font-medium capitalize"
      >
        about
      </button> */}
    </article>
  );
};

export default PokemonCard;

import { useNavigate } from "react-router-dom";
import { generateImageUrl } from "../utils/Pokemon";
import { randomRgba, oppositeRgb } from "../utils/Theme";

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

  const opposite = oppositeRgb(rgb);

  const oppositebackgroundColor = backgroundColor(opposite);

  return (
    <div
      style={{
        backgroundColor: backgroundColor(rgb),
      }}
      className={`flex flex-col items-center p-6 py-3 gap-5  min-w-[260px] w-[300px] rounded-md transition-all duration-500`}>
      <div className=" h-[180px] ">
        <img
          src={generateImageUrl(id)}
          alt={name}
          className="block w-full h-full "
        />
      </div>
      <h1
        style={{
          backgroundColor: oppositebackgroundColor,
          borderColor: oppositebackgroundColor,
        }}
        className="text-white text-xl px-4 py-1 rounded-md text-center font-extrabold uppercase tracking-widest">
        {name}
      </h1>
      <button
        style={{
          backgroundColor: oppositebackgroundColor,
          borderColor: oppositebackgroundColor,
        }}
        onClick={() => navigate(`/pokemon/${id}`)}
        className=" animate-bounce px-4 py-2 tracking-widest rounded-3xl border shadow-lg border-white text-white font-medium capitalize">
        about
      </button>
    </div>
  );
};

export default PokemonCard;

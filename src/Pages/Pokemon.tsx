import { useParams } from "react-router-dom";
import usePokemon from "../Query/usePokemon";
import RandomRgbColor from "../utils/randomColor";
import { CgPokemon } from "react-icons/cg";
import { MdCatchingPokemon } from "react-icons/md";

import { Card, Information } from "../Components/Pokemon";

type Props = {};

const Pokemon = (props: Props) => {
  const params = useParams();
  const { error, isLoading, isError } = usePokemon(params.id!);

  const randomColor = new RandomRgbColor();
  if (isLoading) {
    return (
      <p className="h-screen flex items-center justify-center">loading ...</p>
    );
  }
  if (isError) {
    console.log("error", error);
    return (
      <p className="h-screen flex items-center justify-center">
        something went wrong :), It appears your are not connected to the
        internet
      </p>
    );
  }
  // console.log(params);
  return (
    <main className=" max-w-sm mx-auto border rounded-3xl overflow-hidden bg-black">
      <Card />
      <Information />
    </main>
  );
};

export default Pokemon;

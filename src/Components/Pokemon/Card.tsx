import React from "react";
import usePokemon from "../../Query/usePokemon";
import { generateImageUrl } from "../../utils/generateImageUrl";
import Header from "./PHeader";
import PTypes from "./PTypes";
import Name from "./Name";
import Image from "./Image";
import { useParams } from "react-router-dom";
const Card = () => {
  const params = useParams();
  const { data } = usePokemon(params.id!);
  const pokemonTypes: string[] = data?.types.map(
    ({ type: { name } }: { type: { name: string } }) => name
  );

  return (
    <section
      className="p-6 pt-6 relative text-white"
      style={{
        // backgroundColor: randomColor.getColor(),
        background: `radial-gradient(circle at 80%, #a34747 0% , transparent 80%)`,
      }}>
      {/* header */}
      <Header id={data.id} />
      {/* image and name */}
      <section className="pt-6 ">
        <div className="flex flex-col gap-3">
          <Name
            name={data.name}
            // backgroundColor={randomColor.getLighterColor()}
          />
          {pokemonTypes && (
            <PTypes
              types={pokemonTypes}
              //   backgroundColor={randomColor.getLighterColor()}
            />
          )}
        </div>
        {/* <MdCatchingPokemon className="absolute text-[15rem] bottom-0 opacity-40  -right-0 rotate-90" /> */}
        <Image src={generateImageUrl(data.id)} alt={data.name} />
      </section>
    </section>
  );
};

export default Card;

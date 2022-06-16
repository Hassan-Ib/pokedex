import React from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../../../Query/usePokemon";
import {
  DecimeterConvertion,
  HextogramConvertion,
} from "../../../utils/Convert";
import { GiWeightScale } from "react-icons/gi";
import { FaRulerVertical } from "react-icons/fa";

type Props = {};

const About = (props: Props) => {
  const params = useParams();
  const {
    data: { height, weight, abilities, species },
  } = usePokemon(params.id!);
  console.log(height, weight, abilities, species);
  return (
    <div>
      <section className=" flex-col sm:flex-row flex gap-4 text-sm justify-center items-center bg-[hsl(329,100%,5%)] border border-red-400 rounded-xl font-semibold py-3 w-fit mx-auto px-4 my-6">
        <div>
          <div className="flex items-center gap-2">
            <GiWeightScale className="text-red-400" />{" "}
            {DecimeterConvertion.toMeter(height)} m |{" "}
            {DecimeterConvertion.toFoot(height)} |
          </div>
          <div className=" capitalize opacity-75 text-center mt-1">height</div>
        </div>
        <div className="text-ceneter">_</div>
        <div>
          <div className="flex items-center gap-2">
            <FaRulerVertical className="text-red-400" />{" "}
            {HextogramConvertion.toKilogram(weight)} kg |{" "}
            {HextogramConvertion.toPounds(weight)} lbs |
          </div>
          <div className=" capitalize opacity-75 text-center mt-1">weight</div>
        </div>
      </section>
      <section>
        <h2 className="my-4 font-semibold px-1">Abilites</h2>
        <ul className="flex gap-2">
          {abilities.map((ability: { ability: { name: string } }) => (
            <li
              key={ability.ability.name}
              className="capitalize px-6   py-1 bg-[hsl(329,100%,5%)] opacity-80 border border-red-400 rounded-2xl text-sm ">
              <span>{ability.ability.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;

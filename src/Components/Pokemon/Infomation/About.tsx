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
      <section className="flex gap-4 text-sm justify-center bg-[hsl(329,100%,5%)] border border-red-400 rounded-xl font-semibold py-3 w-fit mx-auto px-4">
        <div>
          <div className="flex items-center gap-2">
            <GiWeightScale className="text-red-400" />{" "}
            {DecimeterConvertion.toMeter(height)} m |{" "}
            {DecimeterConvertion.toFoot(height)} |
          </div>
          <div className=" capitalize opacity-75 text-center mt-1">height</div>
        </div>
        <div>_</div>
        <div>
          <div className="flex items-center gap-2">
            <FaRulerVertical className="text-red-400" />{" "}
            {HextogramConvertion.toKilogram(weight)} kg |{" "}
            {HextogramConvertion.toPounds(weight)} lbs |
          </div>
          <div className=" capitalize opacity-75 text-center mt-1">weight</div>
        </div>
      </section>
    </div>
  );
};

export default About;

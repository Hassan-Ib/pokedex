import React from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../../../Query/usePokemon";

type Stat = {
  name: string;
  base_stat: number;
};
const Stats = () => {
  const { id } = useParams();
  const { data } = usePokemon(id!);
  const stats: [Stat] = data.stats
    .map(
      ({
        base_stat,
        stat: { name },
      }: {
        base_stat: number;
        stat: { name: string };
      }) => ({
        name,
        base_stat,
      })
    )
    .map((stat: Stat) => {
      if (stat.name === "special-attack") {
        return {
          ...stat,
          name: "Sp_Atk",
        };
      }
      if (stat.name === "special-defense") {
        return {
          ...stat,
          name: "Sp_Def",
        };
      }
      return stat;
    });

  return (
    <div className="grid gap-2 text-sm ">
      {stats.map((stat, key) => (
        <StatMessure name={stat.name} base_stat={stat.base_stat} />
      ))}
    </div>
  );
};

type StatMessureProps = {
  name: string;
  base_stat: number;
};
const StatMessure = ({ name, base_stat }: StatMessureProps) => {
  return (
    <div className="capitalize font-semibold grid grid-cols-5 gap-2 items-center ">
      <p className="opacity-70 ">{name}</p>
      <p>{base_stat}</p>
      {/* <div
        role="meter"
        aria-label={`${name} is `}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={base_stat}>
        <div className=""></div>
      </div> */}
      <meter
        min="0"
        max="100"
        value={base_stat}
        low={33}
        high={66}
        optimum={80}
        className="col-span-3  w-full h-3 "></meter>
      {/* <div className="col-span-2 bg-white h-4"></div> */}
    </div>
  );
};

export default Stats;

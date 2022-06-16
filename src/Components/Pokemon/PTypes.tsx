import React from "react";

type Props = {
  types: string[];
  // backgroundColor: string;
};

const PTypes = (props: Props) => {
  return (
    <ul className="flex gap-2 pl-3 ">
      {props.types.slice(0, 2).map((type, key) => (
        <p
          className="capitalize font-medium w-fit py-1 px-4 rounded-xl text-xs border border-red-400"
          key={key}
          // style={{
          //   backgroundColor: props.backgroundColor,
          // }}
        >
          {type}{" "}
        </p>
      ))}
    </ul>
  );
};

export default PTypes;

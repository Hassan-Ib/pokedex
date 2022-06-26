import React from "react";

type Props = {
  types: string[];
  // backgroundColor: string;
};

const PTypes = (props: Props) => {
  const filteredTypes = props.types.slice(0, 2);
  return (
    <ul className="flex gap-2 pl-3 ">
      <li className="capitalize font-medium w-fit py-1 px-4 rounded-xl text-xs border border-red-400 text-red-400">
        {filteredTypes[0]}
      </li>
      {filteredTypes.length > 1 && (
        <li className="capitalize font-medium w-fit py-1 px-4 rounded-xl text-xs border border-blue-400 text-blue-400">
          {filteredTypes[1]}
        </li>
      )}
    </ul>
  );
};

export default PTypes;

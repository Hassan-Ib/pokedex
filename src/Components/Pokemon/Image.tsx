import React from "react";

type Props = {
  src: string;
  alt: string;
};

const Image = (props: Props) => {
  return (
    <div className="max-w-xs mx-auto relative z-10 ">
      <img src={props.src} alt={props.alt} className="h-56 mx-auto" />
    </div>
  );
};

export default Image;

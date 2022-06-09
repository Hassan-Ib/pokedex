import React from "react";

type Props = {};

const Error404 = (props: Props) => {
  return (
    <div className="h-screen flex place-content-center place-items-center text-center">
      <div>
        <h1 className="text-2xl font-medium">Error 404</h1>
        <p>Page not found :)</p>
      </div>
    </div>
  );
};

export default Error404;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const NotExist = () => {
  const param = useParams();
  const navigate = useNavigate();
  console.log(param);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(`/pokemon/${param.id}`);
    }, 1000);
    return () => clearTimeout(timeout);
  });
  return (
    <div className="flex justify-center items-center p-2">
      path does Not Exist
    </div>
  );
};

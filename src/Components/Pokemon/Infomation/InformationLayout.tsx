import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export const InformationLayout = () => {
  return (
    <div className="flex flex-col text-white border border-red-500 p-6 rounded-2xl overflow-hidden">
      <Navigation />
      <Outlet />
    </div>
  );
};

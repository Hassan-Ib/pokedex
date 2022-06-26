import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export const InformationLayout = () => {
  return (
    <div className="flex flex-col relative -top-2 bg-black text-white border border-b-0 border-red-500 p-6 rounded-3xl overflow-hidden">
      <Navigation />
      <Outlet />
    </div>
  );
};

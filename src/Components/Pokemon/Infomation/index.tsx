import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Stats from "./Stats";
import { NotExist } from "./NotExist";
import { InformationLayout } from "./InformationLayout";
import Moves from "./Moves";
import Navigation from "./Navigation";
type Props = {};

const Information = (props: Props) => {
  return (
    <div className="flex flex-col relative -top-3 bg-black text-white  p-6 rounded-3xl overflow-hidden">
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="stats" element={<Stats />} />
        <Route path="moves" element={<Moves />} />
        <Route path="*" element={<NotExist />} />
      </Routes>
    </div>
  );
};

export default Information;

import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Stats from "./Stats";
import { NotExist } from "./NotExist";
import { InformationLayout } from "./InformationLayout";
import Moves from "./Moves";
type Props = {};

const Information = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<InformationLayout />}>
        <Route index element={<About />} />
        <Route path="stats" element={<Stats />} />
        <Route path="moves" element={<Moves />} />
        <Route path="*" element={<NotExist />} />
      </Route>
    </Routes>
  );
};

export default Information;

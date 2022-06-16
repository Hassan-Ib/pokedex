import React from "react";
import { useParams, Link, NavLink } from "react-router-dom";
type Props = {};

const links = [
  {
    name: "About",
    to: "/pokemon/${id}",
  },
  {
    name: "Stats",
    to: "/pokemon/${id}/stats",
  },
  {
    name: "moves",
    to: "/pokemon/${id}/moves",
  },
];

const Navigation = (props: Props) => {
  const { id } = useParams();

  return (
    <nav aria-labelledby="pokemon information" className="pb-4 ">
      <ul className="flex justify-between px-2 font-medium capitalize">
        {links.map(({ name, to }) => (
          <li key={name}>
            <NavLink
              to={to.replace("${id}", `${id}`)}
              className={({ isActive }) => {
                return isActive ? "active-link pb-2" : "pb-2";
              }}
              end={name === "About"}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

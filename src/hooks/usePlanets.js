import { useState } from "react";
import { data } from "../data/data";

const names = data.map(({ name }) => name);

export const usePlanets = () => {
  const [planets, setPlanets] = useState(data);
  const [links, setLinks] = useState(names);
  const [planetIndex, setPlanexIndex] = useState(0);
  const [planet, setPlanet] = useState(planets[planetIndex]);

  const changePlanet = (newPlanetIndex) => {
    setPlanexIndex(newPlanetIndex);
    setPlanet(planets[newPlanetIndex]);
  };

  return {
    links,
    planet,
    planetIndex,
    changePlanet,
  };
};

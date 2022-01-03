import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const getSections = (planet) => {
  return [
    {
      name: "Overview",
      content: planet.overview.content,
      img: planet.images.planet,
      source: planet.overview.source,
    },

    {
      name: "Internal Structure",
      content: planet.structure.content,
      img: planet.images.internal,
      source: planet.structure.source,
    },
    {
      name: "Geology",
      content: planet.geology.content,
      img: planet.images.geology,
      source: planet.geology.source,
    },
  ];
};

export const usePlanetCard = (planet) => {
  const [currentPlanet, setCurrentPlanet] = useState(planet);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sections, setSections] = useState(getSections(planet));
  const [section, setSection] = useState(sections[sectionIndex]);

  const changeSection = (newSectionIndex) => {
    setSectionIndex(newSectionIndex);
    setSection(sections[newSectionIndex]);
  };

  useEffect(() => {
    setSections(getSections(currentPlanet));
  }, [currentPlanet]);

  useEffect(() => {
    setSection(sections[sectionIndex]);
  }, [sections]);

  return {
    setCurrentPlanet,
    currentPlanet,
    changeSection,
    sectionIndex,
    sections,
    section,
  };
};

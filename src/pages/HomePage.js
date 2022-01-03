import styled from "styled-components";
import { Footer } from "../containers/Footer";
import Header from "../containers/Header";
import { PlanetCard } from "../containers/PlanetCard";
import { usePlanets } from "../hooks/usePlanets";

export const HomePage = () => {
  const { links, planet, planetIndex, changePlanet } = usePlanets();

  return (
    <GridContainer>
      <Header
        links={links}
        planetIndex={planetIndex}
        changePlanet={changePlanet}
      />
      <PlanetCard planet={planet} />
      <Footer />
    </GridContainer>
  );
};

const GridContainer = styled.div``;

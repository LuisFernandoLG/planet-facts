import styled, { css } from "styled-components";
import { FlexContainer } from "../components/FlexContainer";
import FactCard from "../components/planetCard/FactCard";
import InfoCard from "../components/planetCard/InfoCard";
import PlanetImg from "../components/planetCard/PlanetImg";
import { PlanetSections } from "../components/planetCard/PlanetSections";
import { usePlanetCard } from "../hooks/usePlanetCard";
import { breakerForTablet } from "../style-helpers/breakers";

export const PlanetCard = ({ planet }) => {
  const {
    setCurrentPlanet,
    currentPlanet,
    changeSection,
    sectionIndex,
    sections,
    section,
  } = usePlanetCard(planet);

  if (planet.name !== currentPlanet.name) setCurrentPlanet(planet);

  return (
    <GridContainer>
      <PlanetImg
        img={section.img}
        sectionIndex={sectionIndex}
        pointer={planet.images.geology}
        planet={planet.images.planet}
      />
      <InfoCard
        name={planet.name}
        content={section.content}
        source={section.source}
      />
      <PlanetSections
        sections={sections}
        changeSection={changeSection}
        sectionIndex={sectionIndex}
      />
      <Facts FlexContainer flex flex_jc_se flex_ai_c gap="2rem" wrap="true">
        <FactCard title="ROTATION TIME" fact={planet.rotation} />
        <FactCard title="REVOLUTION TIME" fact={planet.revolution} />
        <FactCard title="RADIUS" fact={planet.radius} />
        <FactCard title="AVERAGE TEMP." fact={planet.temperature} />
      </Facts>
    </GridContainer>
  );
};

const Facts = styled(FlexContainer)`
  grid-column: 1 / -1;
  grid-row: 3 / span 1;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-rows: 20rem auto 6.25rem;
  gap: 1rem;

  margin: 2rem auto;
  max-width: 80%;

  ${breakerForTablet(css`
    display: flex;
    flex-direction: column;
  `)}
`;

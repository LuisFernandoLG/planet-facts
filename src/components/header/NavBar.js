import styled, { css } from "styled-components";
import { FlexContainer } from "../FlexContainer";
import { motion } from "framer-motion";
import { breakerForTablet } from "../../style-helpers/breakers";

export const NavBar = ({ links, changePlanet, planetIndex }) => {
  return (
    <NavBarContainer flex gap="1rem">
      {links.map((link, i) => (
        <Link key={i} onClick={() => changePlanet(i)}>
          {i === planetIndex ? (
            <TabColor
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : null}
          {link}
        </Link>
      ))}
    </NavBarContainer>
  );
};

const TabColor = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 0.5rem;
  top: -90%;

  background: ${({ theme: { COLORS } }) => COLORS.ACCENT};
`;

const NavBarContainer = styled(FlexContainer)`
  ${breakerForTablet(css`
    display: none;
  `)}
`;

const Link = styled(motion.span)`
  cursor: pointer;
  position: relative;
  height: 100%;
  min-width: 4rem;
`;

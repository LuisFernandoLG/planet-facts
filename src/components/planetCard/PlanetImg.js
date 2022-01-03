import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexContainer } from "../FlexContainer";
import { motion } from "framer-motion";

const PlanetImg = ({ img, ratio, pointer, planet, sectionIndex }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
      // animate={{ x: [0, 100, 0] }}
    >
      <PlanetContainer flex flex_jc_c flex_ai_c>
        {sectionIndex === 2 ? (
          <>
            <Planet src={planet} alt="planet" />
            <Pointer src={pointer} alt="pointer" />
          </>
        ) : (
          <Planet src={img} alt="planet" />
        )}
      </PlanetContainer>
    </motion.div>
  );
};

PlanetImg.propTypes = {};

const PlanetContainer = styled(FlexContainer)`
  position: relative;
  width: 100%;
  height: 100%;

  grid-column: 1 / span 1;
  grid-row: 1 / -2;

  cursor: pointer;
`;
const Pointer = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: 50%;
  right: 50%;
  width: 20%;
`;
const Planet = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;

  pointer-events: none;
`;

export default PlanetImg;

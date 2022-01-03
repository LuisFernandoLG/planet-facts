import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const FactCard = ({ title, fact }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // drag
      // dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
    >
      <Container>
        <Title>{title}</Title>
        <FactContent>{fact}</FactContent>
      </Container>
    </motion.div>
  );
};

FactCard.propTypes = {
  title: PropTypes.string,
  fact: PropTypes.string,
};

const Title = styled.h3`
  color: ${({ theme: { COLORS } }) => COLORS.SECONDARY};

  font-size: ${({ theme: { FONT_SIZES } }) => FONT_SIZES.SMALLEST};
`;
const FactContent = styled.p`
  font-size: ${({ theme: { FONT_SIZES } }) => FONT_SIZES.TITLE};
  font-family: ${({ theme: { FONT_FAMILY } }) => FONT_FAMILY.PRIMARY};
`;

const Container = styled.div`
  cursor: pointer;
  border: 1px solid ${({ theme: { COLORS } }) => COLORS.SECONDARY};
  padding: 1.5rem;
  flex-grow: 1;
`;

export default FactCard;

import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexContainer } from "../FlexContainer";
import linkIcon from "../../icons/linkIcon.svg";

const InfoCard = ({ name, content, source }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Information>{content}</Information>
      <Source flex gap="0.5rem" flex_ai_c>
        Source:{" "}
        <a href={source} target="_blank" rel="noreferrer noopener">
          Wikipedia
        </a>{" "}
        <img src={linkIcon} />
      </Source>
    </Container>
  );
};

const Container = styled(FlexContainer)`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
`;

const Name = styled.h2`
  font-size: ${({ theme: { FONT_SIZES } }) => FONT_SIZES.MAIN_TITLE};
  font-family: ${({ theme: { FONT_FAMILY } }) => FONT_FAMILY.PRIMARY};
`;
const Information = styled.p`
  font-size: ${({ theme: { FONT_SIZES } }) => FONT_SIZES.BODY};
  line-height: 1.5rem;
  margin: 1rem 0;
  max-width: 90%;
`;
const Source = styled(FlexContainer)`
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.BOLD};

  color: ${({ theme: { COLORS } }) => COLORS.SECONDARY};
  width: 100%;
  img {
    width: 1rem;
  }

  a {
    color: ${({ theme: { COLORS } }) => COLORS.TERTIARY};
  }
`;

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.object,
  structure: PropTypes.object,
  geology: PropTypes.object,
};

export default InfoCard;

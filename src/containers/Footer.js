import styled from "styled-components";
import { FlexContainer } from "../components/FlexContainer";

export const Footer = () => {
  return (
    <FlexContainer flex flex_jc_c pd="1rem">
      <Link
        href="https://github.com/LuisFernandoLG/planet-facts"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </Link>
    </FlexContainer>
  );
};

const Link = styled.a`
  color: ${({ theme: { COLORS } }) => COLORS.TERTIARY};
  weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.BOLD};
`;

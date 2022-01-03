import styled, { css } from "styled-components";
import { FlexContainer } from "../FlexContainer";

export const PlanetSections = ({ sections, changeSection, sectionIndex }) => {
  return (
    <Container flex flex_dc gap="1rem">
      {sections.map(({ name }, i) => (
        <SectionLink
          key={`section-${i}`}
          onClick={() => changeSection(i)}
          isActive={i === sectionIndex}
        >
          <Number>0{i}</Number>
          <span>{name}</span>
        </SectionLink>
      ))}
    </Container>
  );
};

const Number = styled.span`
  color: ${({ theme: { COLORS } }) => COLORS.SECONDARY};
  margin-right: 1rem;
`;

const SectionLink = styled.span`
  border: 1px solid ${({ theme: { COLORS } }) => COLORS.SECONDARY};
  cursor: pointer;
  padding: 1rem;

  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.BOLD};

  ${({ isActive }) =>
    isActive
      ? css`
          background: ${({ theme: { COLORS } }) => COLORS.ACCENT};
        `
      : null}
`;

const Container = styled(FlexContainer)`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
`;

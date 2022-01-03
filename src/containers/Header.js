import styled from "styled-components";
import { FlexContainer } from "../components/FlexContainer";
import { Logo } from "../components/header/Logo";
import { NavBar } from "../components/header/NavBar";

const Header = ({ links, planetIndex, changePlanet }) => {
  return (
    <HeaderContainer flex flex_jc_sb pd="1.5rem 1rem">
      <Logo />
      <NavBar
        links={links}
        planetIndex={planetIndex}
        changePlanet={changePlanet}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled(FlexContainer)`
  border-bottom: 1px solid ${({ theme: { COLORS } }) => COLORS.SECONDARY};
`;

export default Header;

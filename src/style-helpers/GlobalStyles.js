import { createGlobalStyle } from "styled-components";
import { FONT_FAMILLY } from "../constants/contansts";

export const GlobalStyles = createGlobalStyle`

*,*::after, *::before{
    padding:0;
    margin:0;
    box-sizing: border-box;
}

body{
    font-family: ${FONT_FAMILLY.SECONDARY};
    font-size:16px;
    
    width: 95%;
    max-width:1400px;
    margin:0 auto;

    background: ${({ theme: { COLORS } }) => COLORS.PRIMARY};
    color: ${({ theme: { COLORS } }) => COLORS.TERTIARY};
    
    
}

`;

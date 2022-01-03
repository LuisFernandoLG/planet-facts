import { css } from "styled-components";
import { BREAKPOINTS } from "../constants/contansts";

export const breakerForTablet = (styles) => {
  return css`
    @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
      ${styles}
    }
  `;
};

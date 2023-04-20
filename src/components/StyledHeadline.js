import styled, { css } from "styled-components";

const StyledHeadline = styled.h1`
  font-size: 4vw;

  ${({ variant }) => {
    if (variant === "header") {
      return css`
        font-size: min(7vw, 2rem);
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "settings") {
      return css`
        font-size: min(5vw, 2rem);
        margin-right: auto;
      `;
    }
  }}
`;

export default StyledHeadline;

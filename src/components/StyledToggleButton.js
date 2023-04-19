import styled, { css } from "styled-components";
import StyledButton from "./StyledButton";

const StyledToggleButton = styled(StyledButton)`
  border: none;
  ${({ variant }) => {
    if (variant === "preview") {
      return css`
        position: absolute;
        transform: translate(80vw, -9rem) rotate(-45deg);
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "detail") {
      return css`
        grid-column: 3;
        grid-row: 5;
        transform: rotate(-45deg);
      `;
    }
  }}

${({ variant }) => {
    if (variant === "spotlight") {
      return css`
        grid-column: 3;
        grid-row: 5;
        transform: translate(77vw, -3.5rem) rotate(-45deg);
      `;
    }
  }}
`;

export default StyledToggleButton;

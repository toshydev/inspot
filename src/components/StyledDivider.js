import styled, { css } from "styled-components";

const StyledDivider = styled.div`
  ${({ variant }) => {
    if (variant === "horizontal") {
      return css`
        height: 2px;
        background: #f0f0f0;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "vertical") {
      return css`
        width: 2px;
        background: #f0f0f0;
      `;
    }
  }}
`;

export default StyledDivider;

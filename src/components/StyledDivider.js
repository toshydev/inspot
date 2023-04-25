import styled, { css } from "styled-components";

const StyledDivider = styled.div`
  ${({ variant }) => {
    switch (variant) {
      case "horizontal":
        return css`
          height: 2px;
          background: #f0f0f0;
        `;
      case "vertical":
        return css`
          width: 2px;
          background: #f0f0f0;
        `;
    }
  }}
`;

export default StyledDivider;

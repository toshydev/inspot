import styled, { css } from "styled-components";

const StyledCardHeadline = styled.h2`
  text-align: center;
  font-size: min(6vw, 32px);

  ${({ variant }) => {
    if (variant === "spotlight") {
      return css`
        font-size: 1rem;
        background: var(--secondary);
        padding: 0.25rem 1.5rem;
        border-radius: 12px 12px 0 0;
        color: white;
      `;
    }
  }}
`;

export default StyledCardHeadline;

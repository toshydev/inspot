import styled, { css } from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  ${({ variant }) => {
    if (variant === "events") {
      return css`
        background: #f5f5f5;
      `;
    }
  }}
`;

export default StyledList;

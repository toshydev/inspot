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
    switch (variant) {
      case "events":
        return css`
          background: #f5f5f5;
        `;
      case "reviews":
        return css`
          width: 90%;
          background: #f0f0f0;
          margin: 1rem;
          border-radius: 12px;
        `;
    }
  }}
`;

export default StyledList;

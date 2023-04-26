import Link from "next/link";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  color: unset;
  text-decoration: none;

  ${({ variant }) => {
    switch (variant) {
      case "icon":
        return css`
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.15s;
          padding: 5px;

          &:hover {
            border-radius: 50px;
            background: #e2b8ec;
          }
        `;
      case "card preview":
        return css`
          grid-row: 1 / 6;
          grid-column: 1 / 6;
        `;
    }
  }}

  ${({ header }) => {
    if (header) {
      return css`
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.2rem;
      `;
    }
  }}

${({ nav }) => {
    if (nav) {
      return css`
        width: 3rem;
        height: 3rem;
      `;
    }
  }}
  
  ${({ width, height, margin }) => {
    return css`
      width: ${width};
      height: ${height};
      margin: ${margin};
    `;
  }}
`;

export default StyledLink;

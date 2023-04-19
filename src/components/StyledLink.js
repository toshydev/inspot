import Link from "next/link";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  color: unset;
  text-decoration: none;

  ${({ variant }) => {
    if (variant === "icon") {
      return css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transition: 0.15s;
        width: 3rem;
        height: 3rem;
        padding: 5px;

        &:hover {
          border-radius: 50px;
          background: #e2b8ec;
        }
      `;
    }
  }}
`;

export default StyledLink;

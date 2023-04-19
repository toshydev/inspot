import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(6, 1fr);

  ${({ variant }) => {
    if (variant === "preview") {
      return css`
        height: 8rem;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "detail") {
      return css`
        height: 16rem;
      `;
    }
  }}
`;

export default StyledCard;

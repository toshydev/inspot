import styled, { css } from "styled-components";

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

${({ background }) => {
    return css`
      background-image: url(${background});
      background-position: center;
      background-size: cover;
    `;
  }}

  ${({ border }) => {
    return css`
      border: ${border};
    `;
  }}

${({ gap }) => {
    return css`
      gap: ${gap};
    `;
  }}
`;

export default StyledCard;

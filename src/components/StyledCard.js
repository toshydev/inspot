import styled, { css } from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(6, 1fr);

  ${({ variant, imageHeight }) => {
    if (variant === "preview") {
      return css`
        width: 100%;
        height: 100%;
        grid-template: repeat(3, ${imageHeight / 3}px) 1fr 1fr / repeat(6, 1fr);
        box-shadow: 0px 0px 8px hsl(0deg 0% 0% / 0.25);
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "review") {
      return css`
        width: 90%;
        grid-template: 2rem repeat(2, 1fr) 2rem / repeat(4, 1fr) 2rem 2rem;
        background: white;
        margin: auto;
        border-radius: 12px;
        box-shadow: 0px 0px 2px hsl(0deg 0% 0% / 0.5);
        padding: 0.5rem;
        gap: 0.5rem;
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

${({ variant }) => {
    if (variant === "profile") {
      return css`
        height: 8rem;
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

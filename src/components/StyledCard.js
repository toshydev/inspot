import styled, { css } from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(6, 1fr);

  ${({ variant }) => {
    if (variant === "preview") {
      return css`
        grid-template: repeat(2, 1fr) 3rem 6rem / repeat(6, 1fr);
        transition: 0.25s ease-in-out;
        border-top: 1px solid #c0c0c0;
        border-bottom: 1px solid #c0c0c0;

        &:hover {
          box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
          transform: scale(1.025);
        }
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

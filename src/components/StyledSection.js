import styled, { css } from "styled-components";

const StyledSection = styled.section`
  padding: 1rem;
  ${({ variant }) => {
    if (variant === "detail") {
      return css`
        grid-template: repeat(7, 1fr) / repeat(4, 1fr);
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "picture") {
      return css`
        grid-row: 1 / 4;
        grid-column: 1 / 3;
        margin: auto;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "rating") {
      return css`
        grid-row: 1 / 3;
        grid-column: 3 / 6;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "numbers") {
      return css`
        grid-row: 1 / 3;
        grid-column: 6 / 7;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "address") {
      return css`
        grid-row: 4 / 5;
        grid-column: 1 / 5;
        font-weight: bold;
        text-align: center;
        margin: auto;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "favorite") {
      return css`
        grid-row: 3 / 6;
        grid-column: 5 / 7;
        margin: auto;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "widget") {
      return css`
        grid-row: 6 / 8;
        grid-column: 1 / 7;
        margin: auto
        width: 90%;
        height: 3rem;
        padding: 0.5rem;
        background: #f0f0f0;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "more") {
      return css`
        grid-row: 5 / 6;
        grid-column: 1 / 5;
        width: 100%;
      `;
    }
  }}

${({ gap }) => {
    return css`
      gap: ${gap};
    `;
  }}
`;

export default StyledSection;

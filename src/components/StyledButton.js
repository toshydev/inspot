import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: 0.15s;
  font-weight: bold;
  padding: 0.5rem;
  background: transparent;

  &:hover {
    border-radius: 50px;
    background: #e2b8ec;
  }

  ${({ position }) => {
    if (position === "preview") {
      return css`
        position: absolute;
        transform: translate(75vw, -6rem) rotate(-45deg);
        width: 3rem;
        height: 3rem;
      `;
    }
  }}

  ${({ position }) => {
    if (position === "spotlight") {
      return css`
        grid-column: 3;
        grid-row: 5;
        transform: translate(77vw, -3.5rem) rotate(-45deg);
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "icon") {
      return css`
        border: none;
        &:first-child {
          fill: currentColor;
        }
      `;
    }
  }}

${({ variant }) => {
    if (variant === "icon favorite") {
      return css`
        margin: 0;
        padding: 0;
        border: none;

        &:hover {
          background: none;
        }
      `;
    }
  }}

${({ variant }) => {
    if (variant === "icon review") {
      return css`
        width: 2rem;
        height: 2rem;
        margin: 0;
        padding: 0;
        border: none;

        &:hover {
          border-radius: 8px;
        }
      `;
    }
  }}

${({ header }) => {
    if (header) {
      return css`
        width: 3rem;
      `;
    }
  }}

  ${({ width, height, col, row, color, radius, padding }) => {
    return css`
      width: ${width};
      height: ${height};
      grid-column: ${col};
      grid-row: ${row};
      color: ${color};
      border-color: ${color};
      border-radius: ${radius};
      padding: ${padding};
    `;
  }}

  ${({ border }) => {
    if (border) {
      return css`
        border: 2px solid;
      `;
    }
  }}

  ${({ shadow }) => {
    if (shadow) {
      return css`
        &:hover {
          filter: drop-shadow(0 2px 2px currentColor);
        }
      `;
    }
  }}

  ${({ danger }) => {
    if (danger) {
      return css`
        &:hover {
          background: red;
          border-color: white;
          color: white;
        }
      `;
    }
  }}

  ${({ warning }) => {
    if (warning) {
      return css`
        &:hover {
          background: deepskyblue;
          border-color: white;
          color: white;
        }
      `;
    }
  }}
`;

export default StyledButton;

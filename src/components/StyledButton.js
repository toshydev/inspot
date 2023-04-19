import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: 0.15s;
  font-weight: bold;
  padding: 0;
  background: transparent;

  ${({ position }) => {
    if (position === "preview") {
      return css`
        position: absolute;
        transform: translate(80vw, -9rem) rotate(-45deg);
      `;
    }
  }}

  ${({ position }) => {
    if (position === "detail") {
      return css`
        grid-column: 3;
        grid-row: 5;
        transform: rotate(-45deg);
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

  ${({ width }) => {
    return css`
      width: ${width};
    `;
  }}

  ${({ height }) => {
    return css`
      height: ${height};
    `;
  }}

  ${({ border }) => {
    if (border) {
      return css`
        border: 2px solid;
      `;
    }
  }}

  ${({ color }) => {
    if (color) {
      return css`
        color: ${color};
        border-color: ${color};
      `;
    }
  }}

  ${({ radius }) => {
    if (radius) {
      return css`
        border-radius: ${radius};
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

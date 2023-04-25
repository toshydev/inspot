import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
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

${({ variant }) => {
    if (variant === "star button") {
      return css`
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        border-radius: 50px;

        &:hover {
          background: #f0f0f0;
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
          background: var(--secondary);
          border-color: white;
          color: white;
        }
      `;
    }
  }}
`;

export default StyledButton;

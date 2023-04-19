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

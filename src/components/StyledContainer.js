import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  ${({ variant }) => {
    if (variant === "sticky") {
      return css`
        width: 100%;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "widget") {
      return css`
        width: 90%;
        display: flex;
        flex-direction: column;
      `;
    }
  }}

  ${({ margin }) => {
    return css`
      margin: ${margin};
    `;
  }}

  ${({ background }) => {
    return css`
      background: ${background};
    `;
  }}

  ${({ variant, cols, rows }) => {
    if (variant === "grid") {
      return css`
        display: grid;
        grid-template-columns: ${cols};
        grid-template-rows: ${rows};
      `;
    }
  }}

  ${({ variant, flex }) => {
    if (variant === "flex") {
      return css`
        display: flex;
        flex-direction: ${flex};
      `;
    }
  }}

${({ align, justify }) => {
    return css`
      align-items: ${align};
      justify-content: ${justify};
    `;
  }}

${({ gap }) => {
    return css`
      gap: ${gap};
    `;
  }}

${({ hover }) => {
    if (hover) {
      return css`
        &:hover {
          background: #e2b8ec;
        }
      `;
    }
  }}

${({ text }) => {
    return css`
      text-align: ${text};
    `;
  }}

${({ weight }) => {
    return css`
      font-weight: ${weight};
    `;
  }}

${({ width }) => {
    return css`
      width: ${width};
    `;
  }}
`;

export default StyledContainer;

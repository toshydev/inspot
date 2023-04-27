import styled, { css } from "styled-components";

const StyledListItem = styled.li`
  ${({ variant, imageHeight }) => {
    if (variant === "listview") {
      return css`
        display: grid;
        grid-template: repeat(3, ${imageHeight / 3}px) 1fr 1fr / repeat(5, 1fr);
        background: white;
        width: 100%;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "grid") {
      return css`
        display: grid;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "flex") {
      return css`
        display: flex;
      `;
    }
  }}

${({ gap, cols, rows, flex, align, justify, width, margin }) => {
    return css`
      gap: ${gap};
      grid-template-columns: ${cols};
      grid-template-rows: ${rows};
      flex-direction: ${flex};
      align-items: ${align};
      justify-content: ${justify};
      width: ${width};
      margin: ${margin};
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
`;

export default StyledListItem;

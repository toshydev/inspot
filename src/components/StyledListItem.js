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

  ${({ variant, cols, rows }) => {
    if (variant === "grid") {
      return css`
        display: grid;
        grid-template-columns: ${cols};
        grid-template-rows: ${rows};
      `;
    }
  }}

  ${({ variant, flex, align, justify }) => {
    if (variant === "flex") {
      return css`
        display: flex;
        flex-direction: ${flex};
        align-items: ${align};
        justify-content: ${justify};
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
`;

export default StyledListItem;

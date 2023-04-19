import styled, { css } from "styled-components";

const StyledListItem = styled.li`
  &:hover {
    background: #e2b8ec;
  }

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

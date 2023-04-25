import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  ${({ variant }) => {
    switch (variant) {
      case "sticky":
        return css`
          width: 100%;
        `;
      case "widget":
        return css`
          width: 90%;
          display: flex;
          flex-direction: column;
        `;
      case "grid":
        return css`
          display: grid;
        `;
      case "flex":
        return css`
          display: flex;
        `;
    }
  }}

  ${({
    align,
    justify,
    cols,
    rows,
    flex,
    gap,
    text,
    weight,
    width,
    background,
    margin,
  }) => {
    return css`
      align-items: ${align};
      justify-content: ${justify};
      grid-template-columns: ${cols};
      grid-template-rows: ${rows};
      flex-direction: ${flex};
      gap: ${gap};
      text-align: ${text};
      font-weight: ${weight};
      width: ${width};
      background: ${background};
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

export default StyledContainer;

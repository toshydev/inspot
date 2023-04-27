import styled, { css } from "styled-components";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  margin-top: 4rem;
  width: 100%;

  ${({ variant }) => {
    if (variant === "spotlight") {
      return css`
        margin-top: 0rem;
      `;
    }
  }}
`;

export default StyledContent;

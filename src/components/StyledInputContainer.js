import styled, { css } from "styled-components";

const StyledInputContainer = styled.div`
  background: #f0f0f0;
  height: 2.5rem;
  width: min(20rem, 70vw);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 50px;
  margin-left: auto;

  ${({ variant }) => {
    if (variant === "places") {
      return css`
        margin: 1rem;
        width: 75vw;
      `;
    }
  }}

  &:hover {
    outline: 3px solid #be4bdb;
    filter: drop-shadow(0 2px 2px #d6a6e2);
  }
`;

export default StyledInputContainer;

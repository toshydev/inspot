import styled from "styled-components";

const StyledInputContainer = styled.div`
  background: #f0f0f0;
  height: 2rem;
  width: 40vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 50px;

  &:hover {
    outline: 3px solid #be4bdb;
    filter: drop-shadow(0 2px 2px #d6a6e2);
  }
`;

export default StyledInputContainer;

import styled from "styled-components";

const StyledIconButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  transition: 0.15s;

  &:hover {
    border-radius: 50px;
    background: #e2b8ec;
  }
`;

export default StyledIconButton;

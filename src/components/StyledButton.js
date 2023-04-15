import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  border: none;
  transition: 0.15s;
  font-weight: bold;

  &:hover {
    background: #be4bdb;
    color: white;
    filter: drop-shadow(0 2px 2px #d6a6e2);

    &:first-child {
      fill: currentColor;
    }
  }
`;

export default StyledButton;

import styled from "styled-components";

const StyledIconButton = styled.button`
  background: transparent;
  border-radius: 12px;
  border: none;

  &:last-child {
    transition: 0.15s;

    &:hover {
      fill: #be4bdb;
      filter: drop-shadow(0 2px 2px #d6a6e2);
    }
  }
`;

export default StyledIconButton;

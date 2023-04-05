import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  width: 6rem;
  height: 2rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  transition: 0.15s;

  &:hover {
    background: #be4bdb;
    color: white;
    font-weight: bold;
  }
`;

export default StyledButton;

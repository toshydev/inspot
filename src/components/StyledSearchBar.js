import styled from "styled-components";

const StyledSearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  border-radius: 15px;
  padding-left: 1rem;
  font-weight: bold;

  &:focus {
    outline: none;

    &::placeholder {
    }
  }
`;

export default StyledSearchBar;

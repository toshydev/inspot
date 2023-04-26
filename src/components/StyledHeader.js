import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #c0c0c0;
  background: white;
  height: 3.5rem;
  z-index: 5;
`;

export default StyledHeader;

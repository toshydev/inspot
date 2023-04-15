import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 98%;
  padding: 0.5rem;
  margin: 0.1rem;
  position: fixed;
  top: 0;
  border: 2px solid black;
  background: white;
  gap: 1rem;
  height: min(15vw, 100px);
  z-index: 5;
`;

export default StyledHeader;

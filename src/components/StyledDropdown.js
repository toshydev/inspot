import styled from "styled-components";

const StyledDropdown = styled.section`
  display: flex;
  flex-direction: ${({ flex }) => flex};
  align-items: center;
  top: 3rem;
  left: 0;
  width: 98%;
  margin: 0.2rem;
  padding: 0.5rem;
  border: 2px solid #f0f0f0;
  background: white;
  text-align: center;
  display: ${({ isActive }) => (isActive ? "visible" : "none")};
  gap: 0.2rem;
`;

export default StyledDropdown;

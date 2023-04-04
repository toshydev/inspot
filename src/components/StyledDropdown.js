import styled from "styled-components";

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  background: white;
  text-align: center;
  hidden: ${(props) => (props.isOpen ? true : false)};
  border-radius: 8px;
  gap: 0.5rem;
`;

export default StyledDropdown;

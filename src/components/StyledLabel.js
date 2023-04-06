import styled from "styled-components";

const StyledLabel = styled.label`
  width: 90%;
  background: #f0f0f0;
  border-radius: 5px;
  padding: 0.1rem;
  filter: drop-shadow(0 0 1px black);
  ${(props) =>
    props?.isActive
      ? "background: #A962BB; color: white; font-weight: bold"
      : null};
`;

export default StyledLabel;

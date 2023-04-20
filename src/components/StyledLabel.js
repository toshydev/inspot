import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding: 0.2rem 1rem;
  width: 100%;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 0px 0px 2px hsl(0deg 0% 0% / 0.5);
  transition: 0.15s ease-in-out;
  ${(props) =>
    props?.isActive
      ? "background: var(--accent); color: white ; box-shadow: 0px 0px 4px hsl(0deg 0% 0% / 0.5)"
      : null};
`;

export default StyledLabel;

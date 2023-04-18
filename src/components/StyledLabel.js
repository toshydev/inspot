import styled from "styled-components";

const StyledLabel = styled.label`
  width: 100%;
  height: 100%;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  transition: 0.15s ease-in-out;
  ${(props) =>
    props?.isActive
      ? "background: var(--accent); color: white ; box-shadow: none"
      : null};
`;

export default StyledLabel;

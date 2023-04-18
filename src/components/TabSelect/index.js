import StyledLabel from "../StyledLabel";
import styled from "styled-components";

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 7rem;
  height: 1.5rem;
  border-radius: 50px;
`;

export default function TabSelect({
  label,
  id,
  name,
  checked,
  disabled,
  onChange,
  isActive,
}) {
  return (
    <StyledTab>
      <StyledLabel htmlFor={id} isActive={isActive}>
        {label}
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          hidden={true}
        />
      </StyledLabel>
    </StyledTab>
  );
}

import styled from "styled-components";
import StyledMenu from "../StyledMenu";
import StyledDropdown from "../StyledDropdown";
import StyledButton from "../StyledButton";

const StyledLabel = styled.label`
  width: 100%;

  &:hover {
    background: #be4bdb;
    border: none;
    color: white;
  }
`;

export default function Menu({
  label,
  options,
  onChange,
  onActivateDropdown,
  activeDropdown,
}) {
  const isOpen = activeDropdown.menu;

  return (
    <StyledMenu>
      <StyledButton
        type="button"
        onClick={() => onActivateDropdown("menu")}
        disabled={options ? false : true}
        aria-label={`${label} menu`}
      >
        {label}
      </StyledButton>
      {isOpen && (
        <StyledDropdown>
          {options.map((option) => {
            return (
              <StyledLabel key={option} htmlFor={option}>
                {option}
                <input
                  id={option}
                  type="checkbox"
                  hidden={true}
                  name={option}
                  onChange={onChange}
                />
              </StyledLabel>
            );
          })}
        </StyledDropdown>
      )}
    </StyledMenu>
  );
}

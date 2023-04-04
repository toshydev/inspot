import styled from "styled-components";
import StyledMenu from "../StyledMenu";
import StyledDropdown from "../StyledDropdown";

const StyledMenuButton = styled.button`
  border-radius: 5px;
  width: 6rem;
`;

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
      <StyledMenuButton
        type="button"
        onClick={() => onActivateDropdown("menu")}
        disabled={options ? false : true}
        aria-label={`${label} menu`}
      >
        {label}
      </StyledMenuButton>
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

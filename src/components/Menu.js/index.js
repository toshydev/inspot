import styled from "styled-components";
import StyledMenu from "../StyledMenu";
import StyledDropdown from "../StyledDropdown";
import StyledButton from "../StyledButton";

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
        aria-label={`${label} menu`}
      >
        {label}
      </StyledButton>
      {isOpen && (
        <StyledDropdown>
          {options.map((option) => {
            return (
              <StyledLabel
                key={option.genre}
                htmlFor={option.genre}
                isActive={option.isActive}
              >
                {option.genre}
                <input
                  id={option.genre}
                  type="checkbox"
                  hidden={true}
                  name={option.genre}
                  onChange={() => onChange(option.genre)}
                  checked={option.isActive}
                />
              </StyledLabel>
            );
          })}
        </StyledDropdown>
      )}
    </StyledMenu>
  );
}

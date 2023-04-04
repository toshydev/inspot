import styled from "styled-components";
import StyledMenu from "../StyledMenu";
import StyledDropdown from "../StyledDropdown";
import StyledTag from "../StyledTag";

const StyledSearchBar = styled.input`
  width: 6rem;
  border-radius: 5px;

  &:focus {
    background: #be4bdb;
    color: white;
    font-weight: bold;

    &::placeholder {
      color: white;
    }
  }
`;

export default function SearchInput({
  tags = ["film", "classical", "beethoven"],
  onSearchInput,
  onRemoveTag,
  onActivateDropdown,
  activeDropdown,
}) {
  const isOpen = activeDropdown.search;

  return (
    <StyledMenu>
      <StyledSearchBar
        type="search"
        placeholder="Search"
        onChange={onSearchInput}
        aria-label="tag search bar"
        onClick={() => onActivateDropdown("search")}
      />
      {isOpen && (
        <StyledDropdown>
          {tags.map((tag) => (
            <StyledTag key={tag}>
              {tag}
              <button type="button" onClick={onRemoveTag}>
                x
              </button>
            </StyledTag>
          ))}
        </StyledDropdown>
      )}
    </StyledMenu>
  );
}

/* <StyledMenu isOpen={isOpen}>
      <StyledMenuButton
        type="button"
        onClick={() => setIsOpen(!isOpen)}
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
    </StyledMenu> */

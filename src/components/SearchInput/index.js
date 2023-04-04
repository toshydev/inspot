import styled from "styled-components";
import StyledMenu from "../StyledMenu";
import StyledDropdown from "../StyledDropdown";
import StyledTag from "../StyledTag";
import { useState } from "react";
import { useFilterStore } from "~/store";

const StyledSearchBar = styled.input`
  width: 6rem;
  height: 2rem;
  border-radius: 5px;

  &:focus {
    background: #be4bdb;
    color: white;
    font-weight: bold;
    outline: none;

    &::placeholder {
      color: white;
    }
  }
`;

export default function SearchInput({ onActivateDropdown, activeDropdown }) {
  //state for controlled input
  const [searchInput, setSearchInput] = useState([]);

  //store for tags list
  const tags = useFilterStore((state) => state.tags);
  const addTags = useFilterStore((state) => state.addTags);
  const deleteTag = useFilterStore((state) => state.deleteTag);

  const isOpen = activeDropdown.search;

  return (
    <StyledMenu>
      <StyledSearchBar
        type="search"
        placeholder="Search"
        onChange={(event) => {
          setSearchInput(event.target.value);
          addTags(searchInput);
        }}
        aria-label="tag search bar"
        onClick={() => onActivateDropdown("search")}
      />
      {isOpen && (
        <StyledDropdown>
          {tags.map((tag) => (
            <StyledTag key={tag}>
              {tag}
              <button type="button" onClick={() => deleteTag(tag)}>
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

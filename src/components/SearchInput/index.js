import styled from "styled-components";
import { useFilterStore } from "../../store";
import StyledDropdown from "../StyledDropdown";
import StyledMenu from "../StyledMenu";
import StyledTag from "../StyledTag";
import { nanoid } from "nanoid";

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
  const tags = useFilterStore((state) => state.tags);
  const addTags = useFilterStore((state) => state.addTags);
  const deleteTag = useFilterStore((state) => state.deleteTag);

  const isOpen = activeDropdown.search;

  return (
    <StyledMenu>
      <StyledSearchBar
        type="search"
        placeholder="Search"
        onKeyDown={(event) => {
          if (event.key === "," || event.key === " " || event.key === "Enter") {
            addTags(event.target.value);
          }
        }}
        aria-label="tag search bar"
        onClick={() => onActivateDropdown("search")}
      />
      {isOpen && (
        <StyledDropdown>
          <p>
            Separate with <em>comma</em> or <em>space</em> or press
            <em>Enter</em>
          </p>
          {tags.map((tag) => (
            <StyledTag key={nanoid()}>
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

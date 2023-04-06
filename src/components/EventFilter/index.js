import { nanoid } from "nanoid";
import styled from "styled-components";
import Clear from "../../../icons/clear_black_36dp.svg";
import { useFilterStore } from "../../store.js";
import Menu from "../Menu.js";
import SearchInput from "../SearchInput/index.js";
import StyledDropdown from "../StyledDropdown.js";
import StyledIconButton from "../StyledIconButton.js";
import StyledLabel from "../StyledLabel.js";
import StyledTag from "../StyledTag.js";

const StyledFilterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 98%;
  padding: 0.5rem;
  margin: 0.1rem;
  position: sticky;
  border: 2px solid black;
  background: white;
`;

export default function EventFilter() {
  const genres = useFilterStore((state) => state.genres);
  const tags = useFilterStore((state) => state.tags);
  const toggleGenre = useFilterStore((state) => state.toggleGenre);
  const deleteTag = useFilterStore((state) => state.deleteTag);
  const resetFilter = useFilterStore((state) => state.resetFilter);
  const filterMenu = useFilterStore((state) => state.filterMenu);

  return (
    <>
      <StyledFilterSection>
        <Menu label="Genre" />
        <SearchInput />
        <StyledIconButton
          onClick={() => {
            resetFilter();
          }}
          aria-label="Clear filter"
        >
          <Clear />
        </StyledIconButton>
      </StyledFilterSection>
      <StyledDropdown isActive={filterMenu.genre} flex="column">
        {genres.map((genre) => {
          return (
            <StyledLabel
              key={genre.genre}
              htmlFor={genre.genre}
              isActive={genre.isActive}
            >
              {genre.genre}
              <input
                id={genre.genre}
                type="checkbox"
                hidden={true}
                name={genre.genre}
                onChange={() => toggleGenre(genre.genre)}
                checked={genre.isActive}
              />
            </StyledLabel>
          );
        })}
      </StyledDropdown>
      <StyledDropdown isActive={filterMenu.search}>
        {tags.map((tag) => (
          <StyledTag key={nanoid()}>
            {tag}
            <StyledIconButton
              type="button"
              onClick={() => deleteTag(tag)}
            ></StyledIconButton>
          </StyledTag>
        ))}
      </StyledDropdown>
    </>
  );
}

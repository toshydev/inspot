import { useState } from "react";
import Menu from "../Menu.js";
import SearchInput from "../SearchInput/index.js";
import styled from "styled-components";

const StyledFilterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 98%;
  padding: 0.5rem;
  margin: 0.1rem;
  position: sticky;
  border: 2px solid black;
  background: white;
  ${(props) => (props.isOpen ? "height: 50vh" : null)}
`;

const StyledResetButton = styled.button`
  border-radius: 5px;
  width: 6rem;
  height: 2rem;
`;

export default function EventFilter({
  genres,
  tags,
  onResetFilter,
  onSetGenreFilter,
  onSearchInput,
}) {
  const [activeDropdown, setActiveDropdown] = useState({
    menu: false,
    search: false,
  });

  const isOpen = activeDropdown.menu || activeDropdown.search;

  function handleActivateDropdown(dropdown) {
    dropdown === "menu"
      ? setActiveDropdown({ menu: !activeDropdown.menu, search: false })
      : dropdown === "search"
      ? setActiveDropdown({ menu: false, search: !activeDropdown.search })
      : setActiveDropdown({ menu: false, search: false });
  }

  return (
    <StyledFilterSection isOpen={isOpen}>
      <Menu
        label="Genre"
        options={genres}
        onChange={onSetGenreFilter}
        onActivateDropdown={handleActivateDropdown}
        activeDropdown={activeDropdown}
      />
      <SearchInput
        tags={tags}
        onSearchInput={onSearchInput}
        onActivateDropdown={handleActivateDropdown}
        activeDropdown={activeDropdown}
      />
      <StyledResetButton onClick={onResetFilter}>
        Clear <span>X</span>
      </StyledResetButton>
    </StyledFilterSection>
  );
}

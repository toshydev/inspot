import { useFilterStore } from "../../store";
import { SearchMed } from "../../utils/icons";
import StyledButton from "../StyledButton";
import StyledInputContainer from "../StyledInputContainer";
import StyledMenu from "../StyledMenu";
import StyledSearchBar from "../StyledSearchBar";

export default function SearchInput({ onAddKeywords }) {
  const setFilterMenu = useFilterStore((state) => state.setFilterMenu);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.keywords) {
      onAddKeywords(data.keywords);
    }
  }

  return (
    <StyledMenu>
      <form aria-label="search for keywords" onSubmit={handleSubmit}>
        <StyledInputContainer>
          <StyledSearchBar
            name="keywords"
            type="search"
            placeholder="Search"
            aria-label="tag search bar"
            onClick={() => setFilterMenu("search")}
          />
          <StyledButton
            variant="icon"
            type="submit"
            aria-label="search by keywords"
          >
            <SearchMed />
          </StyledButton>
        </StyledInputContainer>
      </form>
    </StyledMenu>
  );
}

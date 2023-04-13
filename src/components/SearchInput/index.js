import { useFilterStore } from "../../store";
import StyledMenu from "../StyledMenu";
import StyledInputContainer from "../StyledInputContainer";
import { SearchMed } from "../../utils/icons";
import StyledIconButton from "../StyledIconButton";
import StyledSearchBar from "../StyledSearchBar";

export default function SearchInput() {
  const { addKeywords, setFilterMenu } = useFilterStore((state) => state);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.keywords) {
      addKeywords(data.keywords);
    }
  }

  return (
    <StyledMenu>
      <form onSubmit={handleSubmit}>
        <StyledInputContainer>
          <StyledSearchBar
            name="keywords"
            type="search"
            placeholder="Search"
            aria-label="tag search bar"
            onClick={() => setFilterMenu("search")}
          />
          <StyledIconButton type="submit" aria-label="search by keywords">
            <SearchMed />
          </StyledIconButton>
        </StyledInputContainer>
      </form>
    </StyledMenu>
  );
}

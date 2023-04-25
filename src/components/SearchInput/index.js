import { SearchMed } from "../../utils/icons";
import StyledButton from "../StyledButton";
import StyledInputContainer from "../StyledInputContainer";
import StyledSearchBar from "../StyledSearchBar";

export default function SearchInput({ onAddTags }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.keywords) {
      onAddTags(data.keywords);
    }
  }

  return (
    <form aria-label="search for keywords" onSubmit={handleSubmit}>
      <StyledInputContainer>
        <StyledSearchBar
          name="keywords"
          type="search"
          placeholder="Search"
          aria-label="tag search bar"
        />
        <StyledButton
          variant="icon"
          width="3rem"
          height="100%"
          type="submit"
          aria-label="search by keywords"
        >
          <SearchMed />
        </StyledButton>
      </StyledInputContainer>
    </form>
  );
}

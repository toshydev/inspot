import CategoriesList from "../CategoriesList";
import SearchBar from "../SearchBar";
import StyledContainer from "../StyledContainer";
import TagList from "../TagList";

export default function Filter({ type }) {
  return (
    <StyledContainer variant="sticky">
      <SearchBar type={type} />
      {type === "event" && <CategoriesList />}
      <TagList type={type} />
    </StyledContainer>
  );
}

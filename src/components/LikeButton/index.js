import { useFilterStore } from "../../store";
import { FavoriteEmpty, FavoriteFilled } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function LikeButton({ id }) {
  const savedVenues = useFilterStore((state) => state.savedVenues);
  const toggleSaveVenue = useFilterStore((state) => state.toggleSaveVenue);
  return (
    <StyledButton
      variant="icon"
      type="button"
      aria-label="save venue"
      onClick={() => toggleSaveVenue(id)}
    >
      {savedVenues.includes(id) ? (
        <FavoriteFilled color="#be4bdb" />
      ) : (
        <FavoriteEmpty color="#000000" />
      )}
    </StyledButton>
  );
}

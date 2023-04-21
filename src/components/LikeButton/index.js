import { useFilterStore } from "../../store";
import { FavoriteEmpty, FavoriteFilled } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function LikeButton({ id }) {
  const savedVenues = useFilterStore((state) => state.savedVenues);
  const toggleSaveVenue = useFilterStore((state) => state.toggleSaveVenue);
  return (
    <StyledButton
      variant="icon favorite"
      type="button"
      aria-label="save venue"
      onClick={() => toggleSaveVenue(id)}
    >
      {savedVenues.includes(id) ? (
        <FavoriteFilled color="#fab005" />
      ) : (
        <FavoriteEmpty color="#000000" stroke="#000000" />
      )}
    </StyledButton>
  );
}

import { useFilterStore } from "../../store";
import { FavoriteEmpty, FavoriteFilled } from "../../utils/icons";
import StyledToggleButton from "../StyledToggleButton";

export default function LikeButton({ id, variant }) {
  const savedVenues = useFilterStore((state) => state.savedVenues);
  const toggleSaveVenue = useFilterStore((state) => state.toggleSaveVenue);
  return (
    <StyledToggleButton
      variant={variant}
      type="button"
      aria-label="save event"
      onClick={() => toggleSaveVenue(id)}
      style={{ transform: "translate(80vw, -2.6rem) rotate(0deg)" }}
    >
      {savedVenues.includes(id) ? (
        <FavoriteFilled color="#be4bdb" />
      ) : (
        <FavoriteEmpty />
      )}
    </StyledToggleButton>
  );
}

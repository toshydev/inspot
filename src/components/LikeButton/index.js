import { useFilterStore } from "../../store";
import { FavoriteEmpty, FavoriteFilled } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function LikeButton({ id, position }) {
  const savedVenues = useFilterStore((state) => state.savedVenues);
  const toggleSaveVenue = useFilterStore((state) => state.toggleSaveVenue);
  return (
    <StyledButton
      position={position}
      variant="icon"
      type="button"
      aria-label="save venue"
      onClick={() => toggleSaveVenue(id)}
      style={{ transform: "translate(80vw, -2.6rem) rotate(0deg)" }}
    >
      {savedVenues.includes(id) ? (
        <FavoriteFilled color="#be4bdb" />
      ) : (
        <FavoriteEmpty />
      )}
    </StyledButton>
  );
}

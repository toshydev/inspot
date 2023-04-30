import { useFilterStore } from "../../store";
import { FavoriteFilled } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function FavoriteButton({ id, type }) {
  const savedVenues = useFilterStore((state) => state.savedVenues);
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const toggleSaveVenue = useFilterStore((state) => state.toggleSaveVenue);
  const toggleSaveEvent = useFilterStore((state) => state.toggleSaveEvent);
  const savedItems = type === "venues" ? savedVenues : savedEvents;
  const toggleSaveItem = type === "venues" ? toggleSaveVenue : toggleSaveEvent;
  return (
    <StyledButton
      variant="icon favorite"
      type="button"
      aria-label="save"
      onClick={() => toggleSaveItem(id)}
    >
      <FavoriteFilled
        color={savedItems.includes(id) ? "#be4bdb" : "#ffffff"}
        stroke={!savedItems.includes(id)}
      />
    </StyledButton>
  );
}

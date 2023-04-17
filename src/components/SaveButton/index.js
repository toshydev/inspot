import { useFilterStore } from "../../store";
import { TicketEmptyBig, TicketFilledBig } from "../../utils/icons";
import StyledToggleButton from "../StyledToggleButton";

export default function SaveButton({ id, variant }) {
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const toggleSaveEvent = useFilterStore((state) => state.toggleSaveEvent);
  return (
    <StyledToggleButton
      variant={variant}
      type="button"
      aria-label="save event"
      onClick={() => toggleSaveEvent(id)}
    >
      {savedEvents.includes(id) ? (
        <TicketFilledBig color="#be4bdb" />
      ) : (
        <TicketEmptyBig />
      )}
    </StyledToggleButton>
  );
}

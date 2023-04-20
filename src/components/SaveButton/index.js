import { useFilterStore } from "../../store";
import { TicketEmptyBig, TicketFilledBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function SaveButton({ id }) {
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const toggleSaveEvent = useFilterStore((state) => state.toggleSaveEvent);
  return (
    <StyledButton
      variant="icon"
      type="button"
      aria-label="save event"
      onClick={() => toggleSaveEvent(id)}
    >
      {savedEvents.includes(id) ? (
        <TicketFilledBig color="#be4bdb" />
      ) : (
        <TicketEmptyBig color="#000000" />
      )}
    </StyledButton>
  );
}

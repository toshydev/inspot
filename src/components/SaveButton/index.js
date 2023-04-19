import { useFilterStore } from "../../store";
import { TicketEmptyBig, TicketFilledBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function SaveButton({ id, position }) {
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const toggleSaveEvent = useFilterStore((state) => state.toggleSaveEvent);
  return (
    <StyledButton
      position={position}
      variant="icon"
      type="button"
      aria-label="save event"
      onClick={() => toggleSaveEvent(id)}
    >
      {savedEvents.includes(id) ? (
        <TicketFilledBig color="#be4bdb" />
      ) : (
        <TicketEmptyBig />
      )}
    </StyledButton>
  );
}

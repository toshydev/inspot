import { useFilterStore } from "../../store";
import { TicketFilledBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function SaveButton({ id }) {
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const toggleSaveEvent = useFilterStore((state) => state.toggleSaveEvent);
  return (
    <StyledButton
      variant="icon favorite"
      type="button"
      aria-label="save event"
      onClick={() => toggleSaveEvent(id)}
    >
      {savedEvents.includes(id) ? (
        <TicketFilledBig color="#fab005" stroke="#000000" />
      ) : (
        <TicketFilledBig color="#ffffff" stroke="#000000" />
      )}
    </StyledButton>
  );
}

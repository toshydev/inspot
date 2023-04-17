import styled from "styled-components";
import css from "styled-jsx/css";
import { useFilterStore } from "../../store";
import { TicketEmptyBig, TicketFilledBig } from "../../utils/icons";
import StyledIconButton from "../StyledIconButton";

const StyledSaveButton = styled(StyledIconButton)`
  ${({ variant }) => {
    if (variant === "preview") {
      return css`
        position: absolute;
        transform: translate(80vw, -9rem) rotate(-45deg);
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "detail") {
      return css`
        grid-column: 3;
        grid-row: 5;
        transform: rotate(-45deg);
      `;
    }
  }}
`;

export default function SaveButton({ id, variant }) {
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const toggleSaveEvent = useFilterStore((state) => state.toggleSaveEvent);
  return (
    <StyledSaveButton
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
    </StyledSaveButton>
  );
}

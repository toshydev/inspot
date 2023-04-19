import { ClearBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function DeleteButton({ id, onDelete }) {
  return (
    <StyledButton
      variant="icon"
      border
      width="1.5rem"
      height="1.5rem"
      danger
      type="button"
      onClick={() => onDelete(id)}
      aria-label="delete review"
    >
      <ClearBig />
    </StyledButton>
  );
}

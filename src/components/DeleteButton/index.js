import { ClearBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function DeleteButton({ id, onDelete }) {
  return (
    <StyledButton
      variant="icon review"
      danger
      type="button"
      onClick={() => onDelete(id)}
      aria-label="delete review"
    >
      <ClearBig />
    </StyledButton>
  );
}

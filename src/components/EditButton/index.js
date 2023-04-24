import { EditBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function EditButton({ onEdit }) {
  return (
    <StyledButton
      variant="icon review"
      warning
      type="button"
      onClick={() => onEdit()}
      aria-label="edit review"
    >
      <EditBig />
    </StyledButton>
  );
}

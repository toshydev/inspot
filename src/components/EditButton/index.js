import { EditBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function EditButton({ onEdit }) {
  return (
    <StyledButton
      variant="icon"
      border
      width="1.5rem"
      height="1.5rem"
      radius="5px"
      warning
      type="button"
      onClick={() => onEdit()}
      aria-label="edit review"
    >
      <EditBig />
    </StyledButton>
  );
}

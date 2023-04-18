import styled from "styled-components";
import { EditBig } from "../../utils/icons";

const StyledEditButton = styled.button`
  background: transparent;
  border: 2px solid black;
  border-radius: 8px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  transition: 0.15s;
  padding: 0;

  &:hover {
    background: deepskyblue;
    border-color: white;
    color: white;
  }
`;

export default function EditButton({ onEdit }) {
  return (
    <StyledEditButton
      type="button"
      onClick={() => onEdit()}
      aria-label="edit review"
    >
      <EditBig />
    </StyledEditButton>
  );
}

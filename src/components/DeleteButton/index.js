import styled from "styled-components";
import { ClearBig } from "../../utils/icons";

const StyledDeleteButton = styled.button`
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
    background: red;
    color: white;
  }
`;

export default function DeleteButton({ id, onDelete }) {
  return (
    <StyledDeleteButton
      type="button"
      onClick={() => onDelete(id)}
      aria-label="delete review"
    >
      <ClearBig />
    </StyledDeleteButton>
  );
}

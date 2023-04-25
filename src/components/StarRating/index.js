import { v4 } from "uuid";
import styled from "styled-components";

const StyledStarContainer = styled.div`
  background: white;
  height: 2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 50px;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

export default function StarRating({ onSetRating }) {
  return (
    <StyledStarContainer>
      {[...Array(5)].map((star, index) => {
        return (
          <button
            type="button"
            key={v4()}
            onClick={() => onSetRating(index + 1)}
          >
            <span rol="star">⭐️</span>
          </button>
        );
      })}
    </StyledStarContainer>
  );
}

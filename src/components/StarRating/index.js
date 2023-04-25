import styled from "styled-components";
import StyledButton from "../StyledButton";

const StyledStarContainer = styled.div`
  background: white;
  height: 2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StarRating({ onSetRating }) {
  return (
    <StyledStarContainer>
      {[...Array(5)].map((star, index) => {
        return (
          <StyledButton
            variant="star button"
            type="button"
            key={index}
            onClick={() => onSetRating(index + 1)}
          >
            <span role="image" aria-label="star emoji that indicates a rating">
              ⭐️
            </span>
          </StyledButton>
        );
      })}
    </StyledStarContainer>
  );
}

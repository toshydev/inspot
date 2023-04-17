import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const StyledBackground = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 8px solid #f0f0f0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

const StyledSpinner = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border: 6px solid;
  border-color: var(--accent) var(--accent) var(--accent) transparent;
  position: relative;
  top: 50%;
  left: 50%;
  background: transparent;
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`;

export default function Spinner() {
  return (
    <div>
      <StyledBackground>
        <StyledSpinner />
      </StyledBackground>
    </div>
  );
}

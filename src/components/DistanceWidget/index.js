import styled from "styled-components";
import StyledProgressContainer from "../StyledProgressContainer";
import StyledProgressLabel from "../StyledProgressLabel";
import StyledWidget from "../StyledWidget";

const StyledArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  position: relative;
  top: -50%;
  transform: translateX(125%);
  left: ${(props) => props.percent + 15}%;
  border-left: 12px solid var(--accent);
  z-index: 5;
`;

const StyledDistance = styled.div.attrs((props) => ({
  style: {
    width: `min(${props.percent}%, 100%)`,
  },
}))`
  background: var(--accent);
  height: 100%;
  border-radius: 50px;
`;

export default function DistanceWidget({ range, distance }) {
  return (
    <StyledWidget>
      <StyledProgressLabel aria-label={`${distance} meters away`}>
        {Math.floor(distance / 1000)} km
      </StyledProgressLabel>
      <StyledProgressContainer>
        <StyledDistance percent={range / distance}>
          <StyledArrow percent={range / distance} />
        </StyledDistance>
      </StyledProgressContainer>
    </StyledWidget>
  );
}

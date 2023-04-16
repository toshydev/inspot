import styled from "styled-components";
import StyledProgressContainer from "../StyledProgressContainer";
import StyledProgressLabel from "../StyledProgressLabel";
import StyledWidget from "../StyledWidget";

const StyledDistance = styled.div.attrs((props) => ({
  style: {
    width: `min(${props.percent}%, 100%)`,
  },
}))`
  background: var(--accent);
  height: 100%;
  border-radius: 50px;
  transition: 1s;
`;

export default function DistanceWidget({ range, distance }) {
  return (
    <StyledWidget>
      <StyledProgressLabel aria-label={`${distance} meters away`}>
        {distance ? `${Math.floor(distance / 1000)} km` : "calculating..."}
      </StyledProgressLabel>
      <StyledProgressContainer>
        <StyledDistance
          percent={distance ? range / distance : 0}
        ></StyledDistance>
      </StyledProgressContainer>
    </StyledWidget>
  );
}

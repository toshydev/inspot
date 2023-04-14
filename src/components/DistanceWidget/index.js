import styled from "styled-components";
import StyledProgressContainer from "../StyledProgressContainer";
import StyledProgressLabel from "../StyledProgressLabel";
import StyledWidget from "../StyledWidget";

const StyledDistance = styled.div.attrs((props) => ({
  style: {
    width: `min(${props.percent}%, 100%)`,
  },
}))`
  background: #be4bdb;
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
        <StyledDistance percent={range / distance}></StyledDistance>
      </StyledProgressContainer>
    </StyledWidget>
  );
}

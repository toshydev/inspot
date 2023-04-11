import styled from "styled-components";
import StyledProgressContainer from "../StyledProgressContainer";
import StyledProgressLabel from "../StyledProgressLabel";
import StyledWidget from "../StyledWidget";

const StyledDistance = styled.div`
  background: #be4bdb;
  width: ${({ percent }) => `min(${percent}%, 100%)`};
  height: 100%;
  border-radius: 50px;
`;

export default function DistanceWidget({ range, distance }) {
  return (
    <StyledWidget>
      <StyledProgressLabel>{distance} m</StyledProgressLabel>
      <StyledProgressContainer>
        <StyledDistance percent={range / distance}></StyledDistance>
      </StyledProgressContainer>
    </StyledWidget>
  );
}

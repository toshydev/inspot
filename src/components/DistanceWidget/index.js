import styled from "styled-components";

const StyledWidget = styled.div`
  background: white;
  width: 100%;
  height: 0.5rem;
  border-radius: 50px;
`;

const StyledDistanceContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledDistance = styled.div`
  background: #be4bdb;
  width: ${({ percent }) => `min(${percent}%, 100%)`};
  height: 100%;
  border-radius: 50px;
`;

const StyledDistanceLabel = styled.small`
  position: absolute;
  transform: translateY(-100%);
`;

export default function DistanceWidget({ range, distance }) {
  return (
    <StyledWidget>
      <StyledDistanceLabel>
        {(distance / 1000).toFixed(1)} km
      </StyledDistanceLabel>
      <StyledDistanceContainer>
        <StyledDistance percent={range / distance}></StyledDistance>
      </StyledDistanceContainer>
    </StyledWidget>
  );
}

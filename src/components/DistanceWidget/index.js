import styled from "styled-components";
import { ArrowSmall, NearMeSmall, TheaterSmall } from "../../utils/icons";
import StyledContainer from "../StyledContainer";
import StyledProgressContainer from "../StyledProgressContainer";
import StyledWidget from "../StyledWidget";

const StyledDistance = styled.div.attrs(({ percent }) => ({
  style: {
    width: `min(${percent}%, 100%)`,
  },
}))`
  background: var(--accent);
  height: 0.13rem;
  border-radius: 50px;
  transition: 1s;
`;

export default function DistanceWidget({ range, distance }) {
  return (
    <StyledWidget>
      <NearMeSmall color="#be4bdb" />
      <StyledContainer variant="widget">
        <small
          aria-label={`${distance} meters away`}
          style={{ textAlign: "right" }}
        >
          {distance
            ? `${Math.floor(distance / 1000)} km | Range: ${range / 1000} km`
            : "calculating..."}
        </small>
        <StyledProgressContainer>
          <StyledDistance percent={distance ? range / distance : 0} />
          <ArrowSmall color="#be4bdb" />
        </StyledProgressContainer>
      </StyledContainer>
      <TheaterSmall color="#be4bdb" />
    </StyledWidget>
  );
}

import styled from "styled-components";
import ArrowBack from "../../../icons/arrow_back_ios_new_black_36dp.svg";
import LocationReset from "../../../icons/wrong_location_black_36dp.svg";
import LocationList from "../../components/LocationList";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledIconLink from "../../components/StyledIconLink";
import { useFilterStore } from "../../store";

const StyledIconButton = styled.button`
  background: transparent;
  border-radius: 12px;
  border: none;

  &:last-child {
    transition: 0.15s;

    &:hover {
      fill: #be4bdb;
      filter: drop-shadow(0 2px 2px #d6a6e2);
    }
  }
`;

export default function LocationPage({ cities }) {
  const resetCity = useFilterStore((state) => state.resetCity);

  return (
    <>
      <StyledHeader>
        <StyledIconLink href="/events/">
          <ArrowBack />
        </StyledIconLink>
        <StyledHeadline>Set your location</StyledHeadline>
        <StyledIconButton type="button" onClick={() => resetCity()}>
          <LocationReset />
        </StyledIconButton>
      </StyledHeader>
      <LocationList cities={cities} />
    </>
  );
}

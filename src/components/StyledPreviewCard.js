import styled from "styled-components";
import StyledListItem from "./StyledListItem";

const StyledPreviewCard = styled(StyledListItem)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  border-radius: 12px;
`;

export default StyledPreviewCard;

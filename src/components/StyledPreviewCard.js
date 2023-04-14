import styled from "styled-components";

const StyledPreviewCard = styled.li`
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  justify-content: space-around;
  border-radius: 12px;
  transition: 0.15s;

  &:hover {
    background: #e2b8ec;
  }
`;

export default StyledPreviewCard;

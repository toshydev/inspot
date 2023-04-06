import styled from "styled-components";

const StyledListItem = styled.li`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  transition: 0.15s;

  &:hover {
    background: #e2b8ec;
  }
`;

export default StyledListItem;

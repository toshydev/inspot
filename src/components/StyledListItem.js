import styled from "styled-components";

const StyledListItem = styled.li`
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  transition: 0.15s;
  justify-content: space-around;

  &:hover {
    background: #e2b8ec;
  }
`;

export default StyledListItem;

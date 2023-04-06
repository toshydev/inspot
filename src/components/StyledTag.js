import styled from "styled-components";

const StyledTag = styled.div`
  background: #f0f0f0;
  padding: 0.5rem;
  border-radius: 50px;
  font-size: 0.75rem;
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: "#";
  }
`;

export default StyledTag;

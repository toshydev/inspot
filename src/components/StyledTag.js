import styled from "styled-components";

const StyledTag = styled.div`
  background: #f0f0f0;
  padding: 0.25rem;
  border-radius: 5px;
  text-align: center;
  font-size: 0.8rem;

  &::before {
    content: "#";
  }
`;

export default StyledTag;

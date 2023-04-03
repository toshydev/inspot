import styled from "styled-components";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return <StyledBody>{children}</StyledBody>;
}

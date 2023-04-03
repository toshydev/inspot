import styled from "styled-components";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

export default function Layout({ children }) {
  return <StyledBody>{children}</StyledBody>;
}

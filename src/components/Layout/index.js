import styled from "styled-components";
import NavigationBar from "../NavigationBar";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <StyledBody>
      <StyledContent>{children}</StyledContent>
      <NavigationBar />
    </StyledBody>
  );
}

import { useRouter } from "next/router";
import styled from "styled-components";
import { ActivityBig, HomeBig, TheaterBig } from "../../utils/icons";
import StyledLink from "../StyledLink";

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 98%;
  height: 3.5rem;
  position: fixed;
  bottom: 0;
  border: 2px solid black;
  background: white;
`;

export default function NavigationBar() {
  const router = useRouter();

  return (
    <StyledNavBar>
      <StyledLink variant="icon" href="/" aria-label="go to home page">
        <HomeBig color={router.pathname === "/" ? "#be4bdb" : "#000000"} />
      </StyledLink>
      <StyledLink variant="icon" href="/venues" aria-label="go to venues page">
        <TheaterBig
          color={router.pathname === "/venues" ? "#be4bdb" : "#000000"}
        />
      </StyledLink>
      <StyledLink variant="icon" href="/events" aria-label="go to events page">
        <ActivityBig
          color={router.pathname === "/events" ? "#be4bdb" : "#000000"}
        />
      </StyledLink>
    </StyledNavBar>
  );
}

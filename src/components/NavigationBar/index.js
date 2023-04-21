import { useRouter } from "next/router";
import styled from "styled-components";
import { ActivityBig, HomeBig, TheaterBig } from "../../utils/icons";
import StyledLink from "../StyledLink";

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #c0c0c0;
  background: white;
  z-index: 5;
`;

export default function NavigationBar() {
  const router = useRouter();

  return (
    <StyledNavBar>
      <StyledLink
        variant="icon"
        nav="true"
        href="/"
        aria-label="go to home page"
      >
        <HomeBig color={router.pathname === "/" ? "#be4bdb" : "#000000"} />
      </StyledLink>
      <StyledLink
        variant="icon"
        nav="true"
        href="/venues"
        aria-label="go to venues page"
      >
        <TheaterBig
          color={router.pathname === "/venues" ? "#be4bdb" : "#000000"}
        />
      </StyledLink>
      <StyledLink
        variant="icon"
        nav="true"
        href="/events"
        aria-label="go to events page"
      >
        <ActivityBig
          color={router.pathname === "/events" ? "#be4bdb" : "#000000"}
        />
      </StyledLink>
    </StyledNavBar>
  );
}

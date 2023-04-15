import styled from "styled-components";
import StyledIconLink from "../StyledIconLink";
import { HomeBig, TheaterBig, ActivityBig } from "../../utils/icons";
import { useRouter } from "next/router";

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 98%;
  position: fixed;
  bottom: 0;
  border: 2px solid black;
  background: white;
`;

export default function NavigationBar() {
  const router = useRouter();

  return (
    <StyledNavBar>
      <StyledIconLink href="/" aria-label="go to home page">
        <HomeBig color={router.pathname === "/" ? "#be4bdb" : "#000000"} />
      </StyledIconLink>
      <StyledIconLink href="/venues" aria-label="go to venues page">
        <TheaterBig
          color={router.pathname === "/venues" ? "#be4bdb" : "#000000"}
        />
      </StyledIconLink>
      <StyledIconLink href="/events" aria-label="go to events page">
        <ActivityBig
          color={router.pathname === "/events" ? "#be4bdb" : "#000000"}
        />
      </StyledIconLink>
    </StyledNavBar>
  );
}

import { useRouter } from "next/router";
import { BookmarkBig, BookmarkFilledBig } from "../../utils/icons";
import StyledLink from "../StyledLink";
import styled from "styled-components";
import { useFilterStore } from "../../store";

const StyledBadge = styled.div`
  position: absolute;
  top: 5%;
  right: 3%;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background: #fab005;
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function BookmarkLink() {
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const savedVenues = useFilterStore((state) => state.savedVenues);

  const router = useRouter();
  return (
    <StyledLink variant="icon" href="/favorites">
      {savedEvents.length + savedVenues.length > 0 && (
        <StyledBadge>
          <p>{savedEvents.length + savedVenues.length}</p>
        </StyledBadge>
      )}
      {router.pathname === "/favorites" ? (
        <BookmarkFilledBig color={"#be4bdb"} />
      ) : (
        <BookmarkBig color={"#000000"} />
      )}
    </StyledLink>
  );
}

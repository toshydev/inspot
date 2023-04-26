import { useRouter } from "next/router";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import { FavoriteEmpty, FavoriteFilled } from "../../utils/icons";
import StyledLink from "../StyledLink";

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
  align-items: flex-end;
  justify-content: center;
`;

export default function BookmarkLink() {
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const savedVenues = useFilterStore((state) => state.savedVenues);

  const router = useRouter();
  return (
    <StyledLink variant="icon" header="true" href="/favorites">
      {savedEvents.length + savedVenues.length > 0 && (
        <StyledBadge>
          <small>{savedEvents.length + savedVenues.length}</small>
        </StyledBadge>
      )}
      {router.pathname === "/favorites" ? (
        <FavoriteFilled color={"#be4bdb"} />
      ) : (
        <FavoriteEmpty color={"#000000"} />
      )}
    </StyledLink>
  );
}

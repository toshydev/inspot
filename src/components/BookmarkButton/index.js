import { BookmarkBig } from "../../utils/icons";
import StyledIconLink from "../StyledIconLink";

export default function BookmarkButton() {
  return (
    <StyledIconLink href="/favorites">
      <BookmarkBig />
    </StyledIconLink>
  );
}

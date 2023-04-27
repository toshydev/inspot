import BookmarkLink from "../../components/BookmarkLink";
import LocationLink from "../../components/LocationLink";
import ProfileDetail from "../../components/ProfileDetail";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledSection from "../../components/StyledSection";
import { useFilterStore } from "../../store";

export default function ProfilePage() {
  const user = useFilterStore((state) => state.user);

  return (
    <>
      <StyledHeader>
        <StyledHeadline variant="header">@{user.username}</StyledHeadline>
        <StyledSection variant="links">
          <LocationLink />
          <BookmarkLink />
        </StyledSection>
      </StyledHeader>
      <StyledContent>
        <ProfileDetail user={user} />
      </StyledContent>
    </>
  );
}

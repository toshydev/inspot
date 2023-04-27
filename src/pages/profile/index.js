import { useSession } from "next-auth/react";
import BookmarkLink from "../../components/BookmarkLink";
import LocationLink from "../../components/LocationLink";
import LoginButton from "../../components/LoginButton";
import ProfileDetail from "../../components/ProfileDetail";
import StyledContent from "../../components/StyledContent";
import StyledDivider from "../../components/StyledDivider";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledSection from "../../components/StyledSection";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <>
      <StyledHeader>
        <StyledHeadline variant="header">
          {session ? session.user.name : "Profile"}
        </StyledHeadline>
        <StyledSection variant="links">
          <LocationLink />
          <BookmarkLink />
        </StyledSection>
      </StyledHeader>
      <StyledContent>
        {session ? (
          <ProfileDetail user={session.user} />
        ) : (
          <p>Please sign in to view your profile.</p>
        )}
        <StyledDivider variant="horizontal" />
        <LoginButton />
      </StyledContent>
    </>
  );
}

import { signOut, useSession } from "next-auth/react";
import BookmarkLink from "../../components/BookmarkLink";
import LocationLink from "../../components/LocationLink";
import LoginButton from "../../components/LoginButton";
import ProfileDetail from "../../components/ProfileDetail";
import StyledContent from "../../components/StyledContent";
import StyledDivider from "../../components/StyledDivider";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledSection from "../../components/StyledSection";
import StyledLink from "../../components/StyledLink";
import styled from "styled-components";
import StyledButton from "../../components/StyledButton";
import { useRouter } from "next/router";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`;

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleDeleteData(id) {
    await fetch(id && `/api/user/${id}`, {
      method: "DELETE",
    });
    alert("Data deleted!");
    signOut();
    router.push("/");
  }

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
      </StyledContent>
      <StyledFooter>
        <LoginButton />
        <StyledLink
          variant="privacy"
          href="https://www.iubenda.com/privacy-policy/34771982"
          aria-label="go to privacy policy"
          target="_blank"
        >
          Privacy Policy
        </StyledLink>
        {session ? (
          <StyledButton
            variant="data delete"
            aria-label="delete my data"
            onClick={() => handleDeleteData(session.user.id)}
          >
            Delete Data
          </StyledButton>
        ) : (
          <p>
            If you have an account and want to delete your data, please sign in
            first.
          </p>
        )}
      </StyledFooter>
    </>
  );
}

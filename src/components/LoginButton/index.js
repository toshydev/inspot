import { signIn, signOut, useSession } from "next-auth/react";
import StyledButton from "../StyledButton";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as <strong>{session.user.name}</strong>
        <br />
        <StyledButton variant="login" onClick={() => signOut()}>
          Sign out
        </StyledButton>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <StyledButton variant="login" onClick={() => signIn()}>
        Sign in
      </StyledButton>
    </>
  );
}

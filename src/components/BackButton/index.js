import { useRouter } from "next/router";
import { ArrowBackBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function BackButton() {
  const router = useRouter();

  return (
    <StyledButton
      variant="icon"
      header
      type="button"
      onClick={() => router.back()}
      aria-label="go back to previous page"
    >
      <ArrowBackBig />
    </StyledButton>
  );
}

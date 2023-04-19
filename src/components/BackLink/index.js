import { useRouter } from "next/router";
import { ArrowBackBig } from "../../utils/icons";
import StyledButton from "../StyledButton";

export default function BackLink() {
  const router = useRouter();

  return (
    <StyledButton
      variant="icon"
      type="button"
      onClick={() => router.back()}
      aria-label="go back to previous page"
    >
      <ArrowBackBig />
    </StyledButton>
  );
}

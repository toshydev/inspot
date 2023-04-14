import { useRouter } from "next/router";
import { ArrowBackBig } from "../../utils/icons";
import StyledIconButton from "../StyledIconButton";

export default function BackLink() {
  const router = useRouter();

  return (
    <StyledIconButton
      type="button"
      onClick={() => router.back()}
      aria-label="go back"
    >
      <ArrowBackBig />
    </StyledIconButton>
  );
}

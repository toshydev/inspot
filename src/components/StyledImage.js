import Image from "next/image";
import styled, { css } from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 12px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  ${({ variant }) => {
    if (variant === "avatar") {
      return css`
        width: 100%;
        height: 100%;
        clip-path: circle(45%);
      `;
    }
  }}
`;

export default StyledImage;

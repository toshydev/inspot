import Link from "next/link";
import styled from "styled-components";

const StyledPreviewLink = styled(Link)`
  color: unset;
  width: 98%;
  height: max(6rem, 20vh);
  text-decoration: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledPreviewLink;

import styled from "styled-components";

const StyledSvg = styled.svg``;

export const ArrowBackBig = ({ color = "#000000", hoverColor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 20 20"
    height="36px"
    viewBox="0 0 20 20"
    width="36px"
    fill={color}
    hoverColor={hoverColor}
  >
    <rect fill="none" height="20" width="20" />
    <polygon points="14.41,3.41 13,2 5,10 13,18 14.41,16.59 7.83,10" />
  </StyledSvg>
);

export const ClearSmall = ({ color = "#000000", hoverColor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px"
    fill={color}
    hoverColor={hoverColor}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </StyledSvg>
);

export const ClearBig = ({ color, hoverColor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="36px"
    viewBox="0 0 24 24"
    width="36px"
    fill={color}
    hoverColor={hoverColor}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </StyledSvg>
);

export const ExpandBig = ({ color, hoverColor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="36px"
    viewBox="0 0 24 24"
    width="36px"
    color={color}
    hoverColor={hoverColor}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </StyledSvg>
);

export const PlaceBig = ({ color, hoverColor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="36px"
    viewBox="0 0 24 24"
    width="36px"
    fill={color}
    hoverColor={hoverColor}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </StyledSvg>
);
export const SearchMed = ({ color, hoverColor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill={color}
    hoverColor={hoverColor}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </StyledSvg>
);
export const WrongLocationBig = ({ color, hoverColor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 20 20"
    height="36px"
    viewBox="0 0 20 20"
    width="36px"
    fill={color}
    hoverColor={hoverColor}
  >
    <g>
      <rect fill="none" height="20" width="20" />
    </g>
    <g>
      <g>
        <path d="M12,8V4.37C11.37,4.13,10.69,4,10,4C7.06,4,4.4,6.25,4.4,9.74c0,2.32,1.87,5.08,5.6,8.26c3.73-3.18,5.6-5.94,5.6-8.26 c0-0.62-0.09-1.2-0.24-1.74H12z M10,11c-0.83,0-1.5-0.67-1.5-1.5S9.17,8,10,8s1.5,0.67,1.5,1.5S10.83,11,10,11z" />
        <polygon points="17.47,3.23 16.77,2.53 15,4.29 13.23,2.53 12.53,3.23 14.29,5 12.53,6.77 13.23,7.47 15,5.71 16.77,7.47 17.47,6.77 15.71,5" />
      </g>
    </g>
  </StyledSvg>
);

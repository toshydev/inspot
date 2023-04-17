import styled from "styled-components";

const StyledSvg = styled.svg``;

export const ArrowBackBig = ({ color = "#000000", hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 20 20"
    height="36px"
    viewBox="0 0 20 20"
    width="36px"
    fill={color}
    hovercolor={hovercolor}
  >
    <rect fill="none" height="20" width="20" />
    <polygon
      strokeLinecap="round"
      strokeLinejoin="round"
      points="14.41,3.41 13,2 5,10 13,18 14.41,16.59 7.83,10"
    />
  </StyledSvg>
);

export const ClearSmall = ({ color = "#000000", hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      d="M0 0h24v24H0z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </StyledSvg>
);

export const ClearBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="36px"
    viewBox="0 0 24 24"
    width="36px"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      d="M0 0h24v24H0z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </StyledSvg>
);

export const ExpandBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"
    />
  </StyledSvg>
);

export const ExpandLessBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m283 711-43-43 240-240 240 239-43 43-197-197-197 198Z"
    />
  </StyledSvg>
);

export const PlaceBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Zm0-472Z"
    />
  </StyledSvg>
);

export const SearchMed = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      d="M0 0h24v24H0z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </StyledSvg>
);
export const WrongLocationBig = ({ color, hovercolor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m675 404 84-84 84 84 42-42-84-84 84-84-42-42-84 84-84-84-42 42 84 84-84 84 42 42ZM480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 976Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q17 0 32.667 1.5Q528.333 179 544 182v62q-15-4-31-6t-33-2q-109.417 0-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897q133-121 196.5-219.5T740 504q0-8-.5-16t-1.5-16h61q1 8 1 16v16q0 100-79.5 217.5T480 976Zm0-494Z"
    />
  </svg>
);

export const ClockSmall = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 20 20"
    height="20px"
    viewBox="0 96 960 960"
    width="20px"
    fill={color}
    hovercolor={hovercolor}
  >
    <g>
      <rect fill="none" height="20" width="20" />
    </g>
    <g>
      <g>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m614 746 51-51-149-149V336h-72v240l170 170ZM480 960q-79.376 0-149.188-30Q261 900 208.5 847.5T126 725.042q-30-69.959-30-149.5Q96 496 126 426t82.5-122q52.5-52 122.458-82 69.959-30 149.5-30 79.542 0 149.548 30.24 70.007 30.24 121.792 82.08 51.786 51.84 81.994 121.92T864 576q0 79.376-30 149.188Q804 795 752 847.5T629.869 930Q559.738 960 480 960Zm0-384Zm.477 312q129.477 0 220.5-91.5T792 575.523q0-129.477-91.023-220.5T480.477 264Q351 264 259.5 355.023t-91.5 220.5Q168 705 259.5 796.5T480.477 888Z"
        />
      </g>
    </g>
  </StyledSvg>
);

export const NearMeSmall = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 96 960 960"
    width="20"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M517 912 416 640 144 539v-35l672-264-264 672h-35Z"
    />
  </StyledSvg>
);

export const TheaterSmall = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 96 960 960"
    width="20"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M288 960q-100 0-170-70T48 720V432h480v288q0 100-70 170t-170 70Zm-72.211-324Q231 636 241.5 625.711q10.5-10.29 10.5-25.5Q252 585 241.711 574.5q-10.29-10.5-25.5-10.5Q201 564 190.5 574.289q-10.5 10.29-10.5 25.5Q180 615 190.289 625.5q10.29 10.5 25.5 10.5ZM288 792q37.44 0 66.72-19T384 720H192q0 34 29.28 53T288 792Zm71.789-156Q375 636 385.5 625.711q10.5-10.29 10.5-25.5Q396 585 385.711 574.5q-10.29-10.5-25.5-10.5Q345 564 334.5 574.289q-10.5 10.29-10.5 25.5Q324 615 334.289 625.5q10.29 10.5 25.5 10.5ZM672 720q-24.649 0-48.825-5Q599 710 576 699V387l-1.5-1.5-1.5-1.5H432V192h480v288q0 100-70 170t-170 70Zm-72.211-324Q615 396 625.5 385.711q10.5-10.29 10.5-25.5Q636 345 625.711 334.5q-10.29-10.5-25.5-10.5Q585 324 574.5 334.289q-10.5 10.29-10.5 25.5Q564 375 574.289 385.5q10.29 10.5 25.5 10.5ZM576 552h192q0-34-29.28-53T672 480q-37 0-66.5 19T576 552Zm167.789-156Q759 396 769.5 385.711q10.5-10.29 10.5-25.5Q780 345 769.711 334.5q-10.29-10.5-25.5-10.5Q729 324 718.5 334.289q-10.5 10.29-10.5 25.5Q708 375 718.289 385.5q10.29 10.5 25.5 10.5Z"
    />
  </StyledSvg>
);

export const PlayArrowSmall = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="25"
    viewBox="0 96 960 960"
    width="25"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M336 840V312l408 264-408 264Z"
    />
  </StyledSvg>
);

export const TheaterBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M773 380q13.6 0 22.8-10 9.2-10 9.2-22 0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8 0 12 9.2 22t22.8 10Zm-172 0q13.6 0 22.8-10 9.2-10 9.2-22 0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8 0 12 9.2 22t22.8 10Zm-22 146h214q0-33-33-51.5T686 456q-41 0-74 18.5T579 526ZM274 975q-97.5 0-165.75-70T40 741V474h468v267q0 94-68.25 164T274 975Zm.159-60Q346 915 397 862.5T448 741V534H100v207q0 69 51.159 121.5 51.16 52.5 123 52.5ZM686 677q-34 0-66-8.5T559 644v-67q26 15 58.5 27.5T686 617q71.775 0 122.888-48Q860 521 860 452V236H509v189h-60V176h471v276q0 93-68.25 159T686 677Zm-497-7q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8 0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8 0 13.6 9.2 22.8 9.2 9.2 22.8 9.2Zm173 0q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8 0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8 0 13.6 9.2 22.8 9.2 9.2 22.8 9.2Zm-85 155q41 0 74-18.5t33-51.5H170q0 33 33 51.5t74 18.5Zm-2-105Zm410-289Z"
    />
  </StyledSvg>
);

export const ActivityBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m376 738 104-81 104 81-40-128 98-82H522l-42-122-42 122H318l98 82-40 128ZM140 896q-26 0-43-17t-17-43V683q37-8 61.5-37.5T166 576q0-40-24.5-70T80 469V316q0-26 17-43t43-17h680q26 0 43 17t17 43v153q-37 7-61.5 37T794 576q0 40 24.5 69.5T880 683v153q0 26-17 43t-43 17H140Zm0-60h680V727q-38-26-62-65t-24-86q0-47 24-86t62-65V316H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140 727v109Zm340-260Z"
    />
  </StyledSvg>
);

export const HomeBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"
    />
  </StyledSvg>
);

export const TicketEmptyBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M140 896q-26 0-43-17t-17-43V683q37-8 61.5-37.5T166 576q0-40-24.5-70T80 469V316q0-26 17-43t43-17h680q26 0 43 17t17 43v153q-37 7-61.5 37T794 576q0 40 24.5 69.5T880 683v153q0 26-17 43t-43 17H140Zm0-60h680V727q-38-26-62-65t-24-86q0-47 24-86t62-65V316H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140 727v109Zm340-63q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0 137Z"
    />
  </StyledSvg>
);

export const TicketFilledBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M140 896q-26 0-43-17t-17-43V683q37-8 61.5-37.5T166 576q0-40-24.5-70T80 469V316q0-26 17-43t43-17h680q26 0 43 17t17 43v153q-37 7-61.5 37T794 576q0 40 24.5 69.5T880 683v153q0 26-17 43t-43 17H140Zm340-123q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Z"
    />
  </StyledSvg>
);

export const BookmarkBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M200 936V271q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480 816 200 936Zm60-91 220-93 220 93V271H260v574Zm0-574h440-440Z"
    />
  </StyledSvg>
);

export const BookmarkFilledBig = ({ color, hovercolor }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    fill={color}
    hovercolor={hovercolor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M200 936V271q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480 816 200 936Z"
    />
  </StyledSvg>
);

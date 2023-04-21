import { useEffect, useState } from "react";
import styled from "styled-components";
import getTimeString from "../../utils/getTimeString";
import { Clock, Play } from "../../utils/icons";
import StyledContainer from "../StyledContainer";
import StyledProgressContainer from "../StyledProgressContainer";
import StyledWidget from "../StyledWidget";

const StyledTimeBar = styled.div.attrs(({ progress }) => ({
  style: {
    width: `${
      progress > 86400 ? 1 : Math.min(((86400 - progress) / 86400) * 100, 100)
    }%`,
  },
}))`
  background: #be4bdb;
  height: 100%;
  border-radius: 50px;
  transition: 1s;
`;

/*     width: `${props.progress > 86400 ? "1%" : (props.progress / 8640) * 100}%`, */
export default function TimeLeftWidget({ startDate, startTime }) {
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const finalDate =
        startDate.length < 11
          ? new Date(startDate + "T" + startTime)
          : new Date(startDate);
      const timeDifference =
        Math.abs(finalDate.getTime() - currentDate.getTime()) / 1000;
      setTimeLeft(timeDifference);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, startTime]);

  return (
    <StyledWidget>
      <Clock color="#be4bdb" />
      <StyledContainer variant="widget">
        <StyledProgressContainer>
          <StyledTimeBar progress={timeLeft ? timeLeft : 86400} />
        </StyledProgressContainer>
        <small aria-label="time left until event start">
          {timeLeft
            ? `Starts in ${
                getTimeString(timeLeft) ? getTimeString(timeLeft) : "N/A"
              }`
            : "calculating..."}
        </small>
      </StyledContainer>
      <Play color="#be4bdb" />
    </StyledWidget>
  );
}

import { useEffect, useState } from "react";
import styled from "styled-components";
import getTimeString from "../../utils/getTimeString";
import StyledProgressContainer from "../StyledProgressContainer";
import StyledProgressLabel from "../StyledProgressLabel";
import StyledWidget from "../StyledWidget";

const StyledTimeBar = styled.div.attrs((props) => ({
  style: {
    width: `${
      props.progress > 86400
        ? 1
        : Math.min(((86400 - props.progress) / 86400) * 100, 100)
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
      <StyledProgressLabel aria-label="time left until event start">
        {timeLeft ? `Starts in ${getTimeString(timeLeft)}` : "calculating..."}
      </StyledProgressLabel>
      <StyledProgressContainer>
        <StyledTimeBar progress={timeLeft ? timeLeft : 86400} />
      </StyledProgressContainer>
    </StyledWidget>
  );
}

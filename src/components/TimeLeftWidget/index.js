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
        ? props.progress / 684800
        : ((86400 - props.progress) / 86400) * 100
    }%`,
  },
}))`
  background: #be4bdb;
  height: 100%;
  border-radius: 50px;
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
        Starts in {getTimeString(timeLeft)}
      </StyledProgressLabel>
      <StyledProgressContainer>
        <StyledTimeBar progress={timeLeft} />
      </StyledProgressContainer>
    </StyledWidget>
  );
}

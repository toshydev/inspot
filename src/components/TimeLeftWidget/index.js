import { useEffect, useState } from "react";
import styled from "styled-components";
import getTimeString from "../../utils/getTimeString";
import StyledProgressContainer from "../StyledProgressContainer";
import StyledProgressLabel from "../StyledProgressLabel";
import StyledWidget from "../StyledWidget";

const StyledTimeBar = styled.div`
  background: #be4bdb;
  width: ${({ progress }) =>
    progress > 86400 ? "1%" : `${progress / 86400}%`};
  height: 100%;
  border-radius: 50px;
`;

export default function TimeLeftWidget({ startDate, startTime }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const finalDate = startTime
        ? new Date(startDate + "T" + startTime)
        : new Date(startDate + "T" + "00:00");
      const timeDifference =
        Math.abs(currentDate.getTime() - finalDate.getTime()) / 1000;
      setTimeLeft(timeDifference);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, startTime]);

  return (
    <StyledWidget>
      <StyledProgressLabel>
        Starts in {getTimeString(timeLeft)}
      </StyledProgressLabel>
      <StyledProgressContainer>
        <StyledTimeBar progress={timeLeft} />
      </StyledProgressContainer>
    </StyledWidget>
  );
}

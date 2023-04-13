import { render, screen } from "@testing-library/react";
import TimeLeftWidget from ".";

test("renders the days, hours or minutes left until event start", () => {
  render(<TimeLeftWidget startDate="2023-05-04" startTime="09:00:00" />);

  const timeLeft = screen.getByLabelText(/time left/i);

  expect(timeLeft).toBeInTheDocument();
});

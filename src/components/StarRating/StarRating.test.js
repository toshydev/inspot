import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StarRating from ".";

test("renders 5 buttons", () => {
  render(<StarRating />);
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(5);
});

test("clicking a button triggers a setRating function", async () => {
  const user = userEvent.setup();
  const handleSetRating = jest.fn();

  render(<StarRating onSetRating={handleSetRating} />);
  const buttons = screen.getAllByRole("button");

  await user.click(buttons[0]);
  await user.click(buttons[1]);
  await user.click(buttons[2]);
  expect(handleSetRating).toHaveBeenCalledTimes(3);
});

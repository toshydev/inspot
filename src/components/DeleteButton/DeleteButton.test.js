import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteButton from ".";

test("renders a button with the label 'delete review'", () => {
  render(<DeleteButton />);
  const button = screen.getByRole("button", { name: /delete review/i });
  expect(button).toBeInTheDocument();
});

test("triggers a callback function when clicked", async () => {
  const user = userEvent.setup();
  const handleDelete = jest.fn();

  render(<DeleteButton onDelete={handleDelete} />);
  const button = screen.getByRole("button", { name: /delete review/i });

  await user.click(button);
  expect(handleDelete).toHaveBeenCalled();
});

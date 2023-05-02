import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditButton from ".";

test("renders a button with the label 'edit review'", () => {
  render(<EditButton />);
  const button = screen.getByRole("button", { name: /edit review/i });
  expect(button).toBeInTheDocument();
});

test("triggers a callback function when clicked", async () => {
  const user = userEvent.setup();
  const handleEdit = jest.fn();

  render(<EditButton onEdit={handleEdit} />);
  const button = screen.getByRole("button", { name: /edit review/i });

  await user.click(button);
  expect(handleEdit).toHaveBeenCalled();
});

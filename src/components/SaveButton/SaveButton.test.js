import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SaveButton from ".";
import { useFilterStore } from "../../store";

test("renders a button with the label 'save event'", () => {
  render(<SaveButton />);
  const button = screen.getByRole("button", { name: /save event/i });
  expect(button).toBeInTheDocument();
});

test("triggers a callback function on click", async () => {
  const store = renderHook(() => useFilterStore());
  const { toggleSaveEvent } = store.result.current;
  const user = userEvent.setup();

  render(<SaveButton />);
  const button = screen.getByRole("button", { name: /save event/i });

  await user.click(button);
  expect(toggleSaveEvent).toHaveBeenCalled();
});

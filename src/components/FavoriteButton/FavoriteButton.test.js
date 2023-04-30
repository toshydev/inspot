import { render, renderHook, screen } from "@testing-library/react";
import FavoriteButton from ".";
import { useFilterStore } from "../../store";
import userEvent from "@testing-library/user-event";

const store = renderHook(() => useFilterStore());
const { toggleSaveEvent } = store.result.current;

test("renders a button with the label 'save'", () => {
  render(<FavoriteButton />);

  const button = screen.getByRole("button", { name: /save/i });
  expect(button).toBeInTheDocument();
});

test("triggers 'toggleSaveEvent' when clicked", async () => {
  const user = userEvent.setup();
  render(<FavoriteButton />);

  const button = screen.getByRole("button", { name: /save/i });
  await user.click(button);

  expect(toggleSaveEvent).toHaveBeenCalled();
});

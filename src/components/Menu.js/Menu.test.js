import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from ".";
import { useFilterStore } from "../../store";

const label = "colors";

test("renders a menu button with a label", () => {
  render(<Menu label={label} />);
  const menuButton = screen.getByRole("button", { name: `${label} menu` });

  expect(menuButton).toBeInTheDocument();
});

test("clicking the menu button triggers a callback function", async () => {
  const store = renderHook(() => useFilterStore());
  const { setFilterMenu } = store.result.current;
  const user = userEvent.setup();

  render(<Menu label={label} />);
  const menuButton = screen.getByRole("button", { name: `${label} menu` });

  await user.click(menuButton);
  await user.click(menuButton);

  expect(setFilterMenu).toHaveBeenCalledTimes(2);
});

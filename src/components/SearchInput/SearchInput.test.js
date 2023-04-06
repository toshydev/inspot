import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from ".";
import { useFilterStore } from "../../store";

test("renders an input element", () => {
  render(<SearchInput />);
  const input = screen.getByRole("searchbox", { placeholder: /search/i });
  expect(input).toBeInTheDocument();
});

test("triggers a callback function when clicking the input element", async () => {
  const store = renderHook(() => useFilterStore());
  const { setFilterMenu } = store.result.current;
  const user = userEvent.setup();

  render(<SearchInput />);
  const input = screen.getByRole("searchbox", { placeholder: /search/i });

  await user.click(input);
  await user.click(input);

  expect(setFilterMenu).toHaveBeenCalledTimes(2);
});

test("triggers a callback function on each comma, space and enter typed", async () => {
  const store = renderHook(() => useFilterStore());
  const { addTags } = store.result.current;
  const user = userEvent.setup();

  render(<SearchInput />);
  const input = screen.getByRole("searchbox", { placeholder: /search/i });

  await user.click(input);
  await user.type(input, "Hello,World !");
  await user.keyboard("{Enter}");

  expect(addTags).toHaveBeenCalledTimes(3);
});

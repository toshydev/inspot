import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from ".";
import { useFilterStore } from "../../store";

test("renders a form with an input element and a button", () => {
  render(<SearchInput />);
  const form = screen.getByRole("form", { name: /search/i });
  const input = screen.getByRole("searchbox", { placeholder: /search/i });
  const submitButton = screen.getByRole("button", { name: /search/i });
  expect(form).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
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

test("triggers a callback function on submit with non-empty data", async () => {
  const onAddKeywords = jest.fn();
  const user = userEvent.setup();

  render(<SearchInput onAddKeywords={onAddKeywords} />);
  const input = screen.getByRole("searchbox", { placeholder: /search/i });

  await user.click(input);
  await user.type(input, "Hello,World !");
  await user.keyboard("{Enter}");

  expect(onAddKeywords).toHaveBeenCalledTimes(1);
});

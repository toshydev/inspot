import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from ".";

test("renders an input element", () => {
  render(<SearchInput />);
  const input = screen.getByRole("searchbox", { placeholder: /search/i });
  expect(input).toBeInTheDocument();
});

test("expects to trigger callback function on each input", async () => {
  const handleSearchInput = jest.fn();
  const user = userEvent.setup();

  render(<SearchInput onSearchInput={handleSearchInput} />);
  const input = screen.getByRole("searchbox", { placeholder: /search/i });

  await user.type(input, "Hello World!");

  expect(handleSearchInput).toHaveBeenCalledTimes(12);
});

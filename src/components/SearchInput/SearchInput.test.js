import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from ".";

const activeDropdownState = { menu: false, search: false };

test("renders an input element", () => {
  render(<SearchInput activeDropdown={activeDropdownState} />);
  const input = screen.getByRole("searchbox", { placeholder: /search/i });
  expect(input).toBeInTheDocument();
});

test("expects to trigger callback function on each input", async () => {
  const handleSearchInput = jest.fn();
  const handleActivateDropdown = jest.fn();
  const user = userEvent.setup();

  render(
    <SearchInput
      onSearchInput={handleSearchInput}
      activeDropdown={activeDropdownState}
      onActivateDropdown={handleActivateDropdown}
    />
  );
  const input = screen.getByRole("searchbox", { placeholder: /search/i });

  await user.type(input, "Hello World!");

  expect(handleSearchInput).toHaveBeenCalledTimes(12);
});

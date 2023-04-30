import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from ".";
import { useFilterStore } from "../../store";

const store = renderHook(() => useFilterStore());
const { resetEventsFilter } = store.result.current;

test("renders a search input, search button, and clear button", () => {
  render(<SearchBar />);

  const searchInput = screen.getByRole("searchbox");
  const searchButton = screen.getByRole("button", { name: /search/i });
  const clearButton = screen.getByRole("button", { name: /clear/i });

  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();
});

test("clearButton triggers 'resetEventsFilter' on click", async () => {
  const user = userEvent.setup();
  render(<SearchBar />);

  const clearButton = screen.getByRole("button", { name: /clear/i });
  await user.click(clearButton);

  expect(resetEventsFilter).toHaveBeenCalled();
});

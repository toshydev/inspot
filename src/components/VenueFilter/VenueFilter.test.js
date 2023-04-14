import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VenueFilter from ".";
import { useFilterStore } from "../../store";

test("renders one tag input field and one clear button", () => {
  render(<VenueFilter />);
  const tagsInput = screen.getByRole("searchbox", { placeholder: /search/i });
  const clearButton = screen.getByRole("button", { name: /clear/i });
  expect(tagsInput).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();
});

test("clicking the clear button resets active tags", async () => {
  const store = renderHook(() => useFilterStore());
  const { venueKeywords } = store.result.current;
  const user = userEvent.setup();

  render(<VenueFilter />);
  const clearButton = screen.getByRole("button", { name: /clear/i });

  await user.click(clearButton);
  const keywordsLength = () => venueKeywords.length;
  const { rerender } = renderHook(keywordsLength);
  rerender(keywordsLength);

  expect(keywordsLength).toHaveLength(0);
});

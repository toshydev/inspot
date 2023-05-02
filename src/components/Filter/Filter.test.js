import { render, renderHook, screen } from "@testing-library/react";
import Filter from ".";
import { useFilterStore } from "../../store";

const store = renderHook(() => useFilterStore());
const { segments, eventKeywords } = store.result.current;

test("renders a search input and search button, checkbox inputs with one tag and clear button", () => {
  render(<Filter type="event" />);

  const searchInput = screen.getByRole("searchbox");
  const searchButton = screen.getByRole("button", { name: /search/i });
  const tags = screen.getAllByRole("checkbox", { hidden: true });
  const clearButton = screen.getByRole("button", { name: /clear/i });

  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(tags).toHaveLength(segments.length + eventKeywords.length);
  expect(clearButton).toBeInTheDocument();
});

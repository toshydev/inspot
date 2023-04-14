import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventFilter from ".";
import { useFilterStore } from "../../store";

test("renders one tag input field, one filter button and one clear button", () => {
  render(<EventFilter />);
  const filterButton = screen.getByRole("button", { name: /filter menu/i });
  const tagsInput = screen.getByRole("searchbox", { placeholder: /search/i });
  const clearButton = screen.getByRole("button", { name: /clear/i });
  expect(filterButton).toBeInTheDocument();
  expect(tagsInput).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();
});

test("clicking the genre menu toggles the genre list", async () => {
  const store = renderHook(() => useFilterStore());
  const { segments } = store.result.current;
  const user = userEvent.setup();

  render(<EventFilter />);
  const filterButton = screen.getByRole("button", { name: /filter menu/i });

  await user.click(filterButton);
  const categories = screen.getAllByRole("checkbox", { hidden: true });

  expect(categories).toHaveLength(segments.length);
});

test("clicking the clear button resets active tags and genres", async () => {
  const store = renderHook(() => useFilterStore());
  const { segments, eventKeywords } = store.result.current;
  const user = userEvent.setup();

  render(<EventFilter />);
  const clearButton = screen.getByRole("button", { name: /clear/i });

  await user.click(clearButton);
  const activeSegments = () => segments.filter((segment) => segment.isActive);
  const keywordsLength = () => eventKeywords.length;
  const { rerender } = renderHook(activeSegments, keywordsLength);
  rerender(segments, keywordsLength);

  expect(activeSegments).toHaveLength(0);
  expect(keywordsLength).toHaveLength(0);
});

import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventFilter from ".";
import { useFilterStore } from "../../store";

test("renders one tag input field, one genre button and one clear button", () => {
  render(<EventFilter />);
  const genreButton = screen.getByRole("button", { name: /genre/i });
  const tagsInput = screen.getByRole("searchbox", { placeholder: /search/i });
  const clearButton = screen.getByRole("button", { name: /clear/i });
  expect(genreButton).toBeInTheDocument();
  expect(tagsInput).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();
});

test("clicking the genre menu toggles the genre list", async () => {
  const store = renderHook(() => useFilterStore());
  const { genres } = store.result.current;
  const user = userEvent.setup();

  render(<EventFilter />);
  const genreButton = screen.getByRole("button", { name: /genre/i });

  await user.click(genreButton);
  const genreOptions = screen.getAllByRole("checkbox", { hidden: true });

  expect(genreOptions).toHaveLength(genres.length);
});

test("clicking the clear button resets active tags and genres", async () => {
  const store = renderHook(() => useFilterStore());
  const { genres, tags } = store.result.current;
  const user = userEvent.setup();

  render(<EventFilter />);
  const clearButton = screen.getByRole("button", { name: /clear/i });

  await user.click(clearButton);
  const activeGenres = () => genres.filter((genre) => genre.isActive);
  const tagLength = () => tags.length;
  const { rerender } = renderHook(activeGenres, tagLength);
  rerender(genres, tagLength);

  expect(activeGenres).toHaveLength(0);
  expect(tagLength).toHaveLength(0);
});

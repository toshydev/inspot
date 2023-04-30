import { render, renderHook, screen } from "@testing-library/react";
import BookmarkLink from ".";
import { useFilterStore } from "../../store";

const store = renderHook(() => useFilterStore());
const { savedEvents } = store.result.current;

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

test("renders a link with the label 'favorites'", () => {
  render(<BookmarkLink />);
  const link = screen.getByRole("link", { name: /favorites/i });
  expect(link).toBeInTheDocument();
});

test("renders a badge with the number of saved items", () => {
  render(<BookmarkLink />);
  const badge = screen.getByLabelText(/saved/i);
  expect(badge).toHaveTextContent(savedEvents.length);
});

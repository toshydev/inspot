import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TagList from ".";
import { useFilterStore } from "../../store";

const store = renderHook(() => useFilterStore());
const { deleteEventKeyword, eventKeywords } = store.result.current;

test("renders a tag for each keyword", () => {
  render(<TagList />);
  const keywords = screen.getAllByRole("checkbox", { hidden: true });
  expect(keywords).toHaveLength(eventKeywords.length);
});

test("clicking on a tag triggers 'deleteEventKeyword'", async () => {
  const user = userEvent.setup();
  render(<TagList />);

  const rockTag = screen.getByLabelText(/rock/i);
  await user.click(rockTag);

  expect(deleteEventKeyword).toHaveBeenCalled();
});

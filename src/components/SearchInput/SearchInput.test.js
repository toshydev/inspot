import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from ".";
import { useFilterStore } from "../../store";

const store = renderHook(() => useFilterStore());
const { addEventKeywords, eventKeywords } = store.result.current;

test("renders an input element and a submit button", () => {
  render(<SearchInput />);

  const input = screen.getByRole("searchbox");
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("triggers 'addEventKeywords' on submit", async () => {
  const user = userEvent.setup();
  render(<SearchInput onAddTags={addEventKeywords} />);

  const input = screen.getByRole("searchbox");
  const button = screen.getByRole("button", { name: /search/i });

  await user.type(input, "Hello, World!, Test");
  await user.click(button);

  expect(addEventKeywords).toHaveBeenCalledWith("Hello, World!, Test");
});

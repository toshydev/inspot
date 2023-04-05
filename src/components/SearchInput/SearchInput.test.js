import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFilterStore } from "../../store";
import SearchInput from ".";

const activeDropdown = { menu: false, search: false };

test("renders an input element", () => {
  render(<SearchInput activeDropdown={activeDropdown} />);
  const input = screen.getByRole("searchbox", { placeholder: /search/i });
  expect(input).toBeInTheDocument();
});

test("expects to trigger callback function on each input", async () => {
  const store = renderHook(() => useFilterStore());
  const { tags, addTags, deleteTag } = store.result.current;
  const handleActivateDropdown = jest.fn();
  const user = userEvent.setup();

  render(
    <SearchInput
      activeDropdown={activeDropdown}
      onActivateDropdown={handleActivateDropdown}
    />
  );
  const input = screen.getByRole("searchbox", { placeholder: /search/i });

  await user.type(input, "Hello World!");

  expect(addTags).toHaveBeenCalledTimes(13);
});

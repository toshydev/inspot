import { render, renderHook, screen } from "@testing-library/react";
import CategoriesList from ".";
import { useFilterStore } from "../../store";
import userEvent from "@testing-library/user-event";

const store = renderHook(() => useFilterStore());
const { segments, toggleSegment } = store.result.current;

test("renders as many input elements as available segments", () => {
  render(<CategoriesList />);
  const inputs = screen.getAllByRole("checkbox", { hidden: true });
  expect(inputs).toHaveLength(segments.length);
});

test("triggers 'toggleSegment' when input element is changed", async () => {
  const user = userEvent.setup();
  render(<CategoriesList />);

  const inputs = screen.getAllByRole("checkbox", { hidden: true });
  await user.click(inputs[0]);

  expect(toggleSegment).toHaveBeenCalled();
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabSelect from ".";

test("renders an input element with a label", () => {
  render(<TabSelect label="testLabel" id="testId" name="testName" />);

  const input = screen.getByLabelText(/testLabel/i);

  expect(input).toBeInTheDocument();
});

test("clicking the input element trigger a callback function", async () => {
  const user = userEvent.setup();
  const handleChange = jest.fn();
  render(
    <TabSelect
      label="testLabel"
      id="testId"
      name="testName"
      onChange={handleChange}
    />
  );

  const input = screen.getByLabelText(/testLabel/i);
  await user.click(input);
  await user.click(input);
  await user.click(input);

  expect(handleChange).toHaveBeenCalledTimes(3);
});

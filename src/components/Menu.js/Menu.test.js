import { render, screen } from "@testing-library/react";
import Menu from ".";

let isOpen = false;
const label = "colors";
const testOptions = ["red", "green", "blue", "yellow", "white", "black"];

test("renders a menu element with a label button and no options", () => {
  render(<Menu label={label} options={testOptions} />);

  const menuLabel = screen.getByRole("button", { name: `${label} menu` });
  const menuOptions = screen.getAllByRole("checkbox", { hidden: true });
  expect(menuLabel).toBeInTheDocument();
  expect(menuOptions).toHaveLength(0);
});

isOpen = true;

test("renders a menu element with a label button and all options", () => {
  render(<Menu label={label} options={testOptions} />);

  const menuLabel = screen.getByRole("button", { name: `${label} menu` });
  const menuOptions = screen.getAllByRole("checkbox", { hidden: true });
  expect(menuLabel).toBeInTheDocument();
  expect(menuOptions).toHaveLength(testOptions.length);
});

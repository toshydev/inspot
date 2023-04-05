import { render, screen } from "@testing-library/react";
import Menu from ".";

const activeDropdownState = { menu: true, search: false };

const label = "colors";
const testOptions = ["red", "green", "blue", "yellow", "white", "black"];

test("renders a menu element with a label button and all options", () => {
  render(
    <Menu
      label={label}
      options={testOptions}
      activeDropdown={activeDropdownState}
    />
  );

  const menuLabel = screen.getByRole("button", { name: `${label} menu` });
  const menuOptions = screen.getAllByRole("checkbox", { hidden: true });
  expect(menuLabel).toBeInTheDocument();
  expect(menuOptions).toHaveLength(testOptions.length);
});

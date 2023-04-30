import { render, screen } from "@testing-library/react";
import LocationLink from ".";

test("renders a link with the label 'location'", () => {
  render(<LocationLink />);
  const link = screen.getByRole("link", { name: /location/i });
  expect(link).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Layout from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

test("renders a navbar", () => {
  render(<Layout />);
  const navbar = screen.getByRole("navigation");
  expect(navbar).toBeInTheDocument();
});

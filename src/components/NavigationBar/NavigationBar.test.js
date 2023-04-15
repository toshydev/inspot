import { render, screen } from "@testing-library/react";
import NavigationBar from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

test("renders three links, home, venues, events", () => {
  render(<NavigationBar />);
  const homeLink = screen.getByRole("link", { name: /home/i });
  const venuesLink = screen.getByRole("link", { name: /venues/i });
  const eventsLink = screen.getByRole("link", { name: /events/i });
  expect(homeLink).toBeInTheDocument();
  expect(venuesLink).toBeInTheDocument();
  expect(eventsLink).toBeInTheDocument();
});

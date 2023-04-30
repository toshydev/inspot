import { render, screen } from "@testing-library/react";
import BackButton from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn(),
    };
  },
}));

test("renders a button with the label 'go back'", () => {
  render(<BackButton />);

  const button = screen.getByRole("button", { name: /go back/i });
  expect(button).toBeInTheDocument();
});

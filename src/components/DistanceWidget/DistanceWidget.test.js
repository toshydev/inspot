import { render, screen } from "@testing-library/react";
import DistanceWidget from ".";

test("renders the distance when distance is available", () => {
  render(<DistanceWidget range={50000} distance={25000} />);

  const label = screen.getByLabelText(/meters away/i);
  expect(label).toBeInTheDocument();
});

test("renders 'calculating...' when distance is unavailable", () => {
  render(<DistanceWidget range={50000} />);

  const label = screen.getByText(/calculating/i);
  expect(label).toBeInTheDocument();
});

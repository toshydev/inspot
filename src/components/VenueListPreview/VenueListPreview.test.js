import { render, screen } from "@testing-library/react";
import VenueListPreview from ".";

const testVenue = {
  name: "Zentrum am Park",
  type: "venue",
  id: "Z598xZC2Z161k",
  test: false,
  url: "https://www.ticketmaster.de/venue/zentrum-am-park-emmelshausen-tickets/elszentrum/701",
  locale: "de-de",
  postalCode: "56281",
  timezone: "Europe/Berlin",
  city: {
    name: "Emmelshausen",
  },
  country: {
    name: "Germany",
    countryCode: "DE",
  },
  address: {
    line1: "Rhein-Mosel-Straße 45",
  },
  location: {
    longitude: "7.55656",
    latitude: "50.15544",
  },
  upcomingEvents: {
    _total: 1,
    "mfx-de": 1,
    _filtered: 0,
  },
  _links: {
    self: {
      href: "/discovery/v2/venues/Z598xZC2Z161k?locale=de-de",
    },
  },
};

test("renders a heading and an aside element", () => {
  render(<VenueListPreview venue={testVenue} />);

  const venueName = screen.getByRole("heading", { name: testVenue.name });
  const venueCity = screen.getByRole("complementary", {
    name: testVenue.city.name,
  });

  expect(venueName).toBeInTheDocument();
  expect(venueCity).toBeInTheDocument();
});

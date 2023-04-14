import { render, screen } from "@testing-library/react";
import VenueList from ".";

const testVenues = [
  {
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
  },
  {
    name: "Weststadthalle",
    type: "venue",
    id: "Z598xZC2Z1Ae7",
    test: false,
    url: "https://www.ticketmaster.de/venue/weststadthalle-essen-tickets/essweststa/701",
    locale: "de-de",
    postalCode: "45127",
    timezone: "Europe/Berlin",
    city: {
      name: "Essen",
    },
    country: {
      name: "Germany",
      countryCode: "DE",
    },
    address: {
      line1: "Thea-Leymann-Straße 23",
    },
    location: {
      longitude: "7.00276",
      latitude: "51.45813",
    },
    upcomingEvents: {
      _total: 1,
      "mfx-de": 1,
      _filtered: 0,
    },
    _links: {
      self: {
        href: "/discovery/v2/venues/Z598xZC2Z1Ae7?locale=de-de",
      },
    },
  },
  {
    name: "Stadthalle (Theatersaal)",
    type: "venue",
    id: "Z598xZC2Z1aAF",
    test: false,
    url: "https://www.ticketmaster.de/venue/stadthalle-theatersaal--mulheim-tickets/mrustadtth/711",
    locale: "de-de",
    postalCode: "45479",
    timezone: "Europe/Berlin",
    city: {
      name: "Mülheim",
    },
    country: {
      name: "Germany",
      countryCode: "DE",
    },
    address: {
      line1: "Theodor-Heuss-Platz 1",
    },
    location: {
      longitude: "6.87471",
      latitude: "51.42778",
    },
    upcomingEvents: {
      _total: 1,
      "mfx-de": 1,
      _filtered: 0,
    },
    _links: {
      self: {
        href: "/discovery/v2/venues/Z598xZC2Z1aAF?locale=de-de",
      },
    },
  },
];

test("renders all venues in the VenueList", () => {
  render(<VenueList venues={testVenues} />);
  const venues = screen.getAllByRole("heading", { level: 4 });
  expect(venues).toHaveLength(testVenues.length);
});

import { render, renderHook, screen } from "@testing-library/react";
import EventDetail from ".";
import { useFilterStore } from "../../store";

const testEvent = {
  name: "Jurassic World: The Exhibition",
  type: "event",
  id: "Z698xZC2Z173_Z_",
  test: false,
  url: "https://www.ticketmaster.de/event/jurassic-world-the-exhibition-tickets/499019",
  locale: "de-de",
  images: [
    {
      ratio: "3_2",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_RETINA_PORTRAIT_3_2.jpg",
      width: 640,
      height: 427,
      fallback: false,
    },
    {
      ratio: "3_2",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_TABLET_LANDSCAPE_3_2.jpg",
      width: 1024,
      height: 683,
      fallback: false,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_RETINA_LANDSCAPE_16_9.jpg",
      width: 1136,
      height: 639,
      fallback: false,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_EVENT_DETAIL_PAGE_16_9.jpg",
      width: 205,
      height: 115,
      fallback: false,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_TABLET_LANDSCAPE_16_9.jpg",
      width: 1024,
      height: 576,
      fallback: false,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_RECOMENDATION_16_9.jpg",
      width: 100,
      height: 56,
      fallback: false,
    },
    {
      ratio: "4_3",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_CUSTOM.jpg",
      width: 305,
      height: 225,
      fallback: false,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_TABLET_LANDSCAPE_LARGE_16_9.jpg",
      width: 2048,
      height: 1152,
      fallback: false,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_RETINA_PORTRAIT_16_9.jpg",
      width: 640,
      height: 360,
      fallback: false,
    },
    {
      ratio: "3_2",
      url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_ARTIST_PAGE_3_2.jpg",
      width: 305,
      height: 203,
      fallback: false,
    },
  ],
  sales: {
    public: {
      startDateTime: "2023-01-26T08:00:00Z",
      startTBD: false,
      startTBA: false,
      endDateTime: "2023-04-13T21:59:00Z",
    },
  },
  dates: {
    start: {
      localDate: "2023-04-20",
      localTime: "09:00:00",
      dateTBD: false,
      dateTBA: false,
      timeTBA: true,
      noSpecificTime: false,
    },
    timezone: "Europe/Berlin",
    status: {
      code: "onsale",
    },
    spanMultipleDays: false,
  },
  classifications: [
    {
      primary: false,
      segment: {
        id: "KZFzniwnSyZfZ7v7n1",
        name: "Miscellaneous",
      },
      genre: {
        id: "KnvZfZ7vA1n",
        name: "Family",
      },
      subGenre: {
        id: "KZazBEonSMnZfZ7vaav",
        name: "Other",
      },
      family: false,
    },
    {
      primary: true,
      segment: {
        id: "KZFzniwnSyZfZ7v7n1",
        name: "Miscellaneous",
      },
      genre: {
        id: "KnvZfZ7vAeE",
        name: "Fairs & Festivals",
      },
      subGenre: {
        id: "KZazBEonSMnZfZ7vF1F",
        name: "Fairs & Festivals",
      },
      family: false,
    },
  ],
  promoter: {
    id: "13337",
    name: "Explorado Group GmbH",
  },
  promoters: [
    {
      id: "13337",
      name: "Explorado Group GmbH",
    },
  ],
  priceRanges: [
    {
      type: "standard including fees",
      currency: "EUR",
      min: 0,
      max: 37.5,
    },
    {
      type: "standard",
      currency: "EUR",
      min: 0,
      max: 33.18,
    },
  ],
  _links: {
    self: {
      href: "/discovery/v2/events/Z698xZC2Z173_Z_?locale=de-de",
    },
    attractions: [
      {
        href: "/discovery/v2/attractions/K8vZ917fFBf?locale=en-us",
      },
    ],
    venues: [
      {
        href: "/discovery/v2/venues/Z698xZC2Za6RP?locale=de-de",
      },
    ],
  },
  _embedded: {
    venues: [
      {
        name: "ODYSSEUM",
        type: "venue",
        id: "Z698xZC2Za6RP",
        test: false,
        url: "https://www.ticketmaster.de/venue/odysseum-koln-tickets/koeodytt/729",
        locale: "de-de",
        postalCode: "51103",
        timezone: "Europe/Berlin",
        city: {
          name: "Cologne",
        },
        country: {
          name: "Germany",
          countryCode: "DE",
        },
        address: {
          line1: "Corintostraße 1",
        },
        location: {
          longitude: "6.99344",
          latitude: "50.94163",
        },
        upcomingEvents: {
          _total: 75,
          "mfx-de": 75,
          _filtered: 0,
        },
        _links: {
          self: {
            href: "/discovery/v2/venues/Z698xZC2Za6RP?locale=de-de",
          },
        },
      },
    ],
    attractions: [
      {
        name: "Jurassic World: The Exhibition",
        type: "attraction",
        id: "K8vZ917fFBf",
        test: false,
        url: "https://www.ticketmaster.ca/jurassic-world-the-exhibition-tickets/artist/2185788",
        locale: "en-us",
        images: [
          {
            ratio: "3_2",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_RETINA_PORTRAIT_3_2.jpg",
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: "3_2",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_TABLET_LANDSCAPE_3_2.jpg",
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: "16_9",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_RETINA_LANDSCAPE_16_9.jpg",
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: "16_9",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_EVENT_DETAIL_PAGE_16_9.jpg",
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: "16_9",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_TABLET_LANDSCAPE_16_9.jpg",
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: "16_9",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_RECOMENDATION_16_9.jpg",
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: "4_3",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_CUSTOM.jpg",
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: "16_9",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: "16_9",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_RETINA_PORTRAIT_16_9.jpg",
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: "3_2",
            url: "https://s1.ticketm.net/dam/a/073/dc60731b-f598-44a3-a31c-7fffc2d04073_ARTIST_PAGE_3_2.jpg",
            width: 305,
            height: 203,
            fallback: false,
          },
        ],
        classifications: [
          {
            primary: true,
            segment: {
              id: "KZFzniwnSyZfZ7v7na",
              name: "Arts & Theatre",
            },
            genre: {
              id: "KnvZfZ7v7nl",
              name: "Fine Art",
            },
            subGenre: {
              id: "KZazBEonSMnZfZ7v7ld",
              name: "Fine Art",
            },
            type: {
              id: "KZAyXgnZfZ7v7n1",
              name: "Venue Based",
            },
            subType: {
              id: "KZFzBErXgnZfZ7v7lE",
              name: "Museum",
            },
            family: false,
          },
        ],
        upcomingEvents: {
          _total: 0,
          _filtered: 0,
        },
        _links: {
          self: {
            href: "/discovery/v2/attractions/K8vZ917fFBf?locale=en-us",
          },
        },
      },
    ],
  },
};

const { range, currentLocation } = renderHook(() => useFilterStore);

test("renders a title, startDate, startTime, address", () => {
  render(<EventDetail event={testEvent} />);
  const title = screen.getByRole("heading", { name: testEvent.name });
  const startDate = screen.getByLabelText(/start date/i);
  const startTime = screen.getByLabelText(/start time/i);
  const address = screen.getByLabelText(/address/i);

  expect(title).toBeInTheDocument();
  expect(startDate).toBeInTheDocument();
  expect(startTime).toBeInTheDocument();
  expect(address).toBeInTheDocument();
});

test("renders a description and information if available", () => {
  render(<EventDetail event={testEvent} />);
  const description = screen.getByRole("heading", { name: /description/i });
  const information = screen.getByRole("link", { name: /more/i });

  expect(description).toBeInTheDocument();
  expect(information).toBeInTheDocument();
});

test("renders the days, hours or minutes left until event start", () => {
  render(
    <EventDetail
      event={testEvent}
      range={range}
      currentLocation={currentLocation}
      distance={5000}
    />
  );

  const timeLeft = screen.getByLabelText(/time left/i);

  expect(timeLeft).toBeInTheDocument();
});

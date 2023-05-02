// mock data for testing purpose, do not review.
import { Venue, Event } from "../utils/types";
export const testVenues: Venue[] = [
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
  {
    name: "Strom",
    type: "venue",
    id: "Z698xZC2ZaAk6",
    test: false,
    url: "https://www.ticketmaster.de/venue/strom-munchen-tickets/muestrom/753",
    locale: "de-de",
    postalCode: "80337",
    timezone: "Europe/Berlin",
    city: {
      name: "Munich",
    },
    country: {
      name: "Germany",
      countryCode: "DE",
    },
    address: {
      line1: "Lindwurmstraße 88",
    },
    location: {
      longitude: "11.54915",
      latitude: "48.12498",
    },
    upcomingEvents: {
      _total: 3,
      "mfx-de": 3,
      _filtered: 0,
    },
    _links: {
      self: {
        href: "/discovery/v2/venues/Z698xZC2ZaAk6?locale=de-de",
      },
    },
  },
];
export const testEvents: Event[] = [
  {
    name: "Jurassic World: The Exhibition",
    type: "event",
    id: "Z698xZC2Z173_ZN",
    test: false,
    url: "https://www.ticketmaster.de/event/jurassic-world-the-exhibition-tickets/499023",
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
        endDateTime: "2023-04-15T21:59:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2023-04-30",
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
        href: "/discovery/v2/events/Z698xZC2Z173_ZN?locale=de-de",
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
  },
  {
    name: "Studio of Wonders: Flex-Ticket 11:00 - 20:00 Uhr",
    type: "event",
    id: "Z698xZC2Z173apo",
    test: false,
    url: "https://www.ticketmaster.de/event/studio-of-wonders-flex-ticket-1100-2000-uhr-tickets/489591",
    locale: "de-de",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-11-25T09:59:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2023-04-15T16:30:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2023-04-15",
        dateTBD: false,
        dateTBA: false,
        timeTBA: true,
        noSpecificTime: false,
      },
      timezone: "Europe/Berlin",
      status: {
        code: "offsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
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
      id: "14491",
      name: "Studio of Wonders GmbH",
    },
    promoters: [
      {
        id: "14491",
        name: "Studio of Wonders GmbH",
      },
    ],
    _links: {
      self: {
        href: "/discovery/v2/events/Z698xZC2Z173apo?locale=de-de",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917QVU0?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z698xZC2ZaFjs?locale=de-de",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Studio of Wonders",
          type: "venue",
          id: "Z698xZC2ZaFjs",
          test: false,
          url: "https://www.ticketmaster.de/venue/studio-of-wonders-berlin-tickets/berstuofw/701",
          locale: "de-de",
          postalCode: "10117",
          timezone: "Europe/Berlin",
          city: {
            name: "Berlin",
          },
          country: {
            name: "Germany",
            countryCode: "DE",
          },
          address: {
            line1: "Leipziger Platz 12",
          },
          location: {
            longitude: "13.3809",
            latitude: "52.5106",
          },
          upcomingEvents: {
            _total: 0,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z698xZC2ZaFjs?locale=de-de",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Studio of Wonders",
          type: "attraction",
          id: "K8vZ917QVU0",
          test: false,
          url: "https://www.ticketmaster.co.nz/studio-of-wonders-tickets/artist/2945047",
          locale: "en-us",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/ed6/a6eb054e-dffb-44a7-96ec-d010e4118ed6_1821691_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7n1",
                name: "Miscellaneous",
              },
              genre: {
                id: "KnvZfZ7vAAE",
                name: "Community/Civic",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vFlv",
                name: "Community/Civic",
              },
              type: {
                id: "KZAyXgnZfZ7v7lt",
                name: "Event Style",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vA6k",
                name: "Expo",
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
              href: "/discovery/v2/attractions/K8vZ917QVU0?locale=en-us",
            },
          },
        },
      ],
    },
  },
  {
    name: "Museumsdorf Cloppenburg (Tageskarte)",
    type: "event",
    id: "Z698xZC2Z17fAo9",
    test: false,
    url: "https://www.ticketmaster.de/event/museumsdorf-cloppenburg-tageskarte--tickets/505457",
    locale: "de-de",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/71a/8ec88564-616d-465d-979a-53eae342571a_106151_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: true,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/71a/8ec88564-616d-465d-979a-53eae342571a_106151_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: true,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/c/71a/8ec88564-616d-465d-979a-53eae342571a_106151_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: true,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/71a/8ec88564-616d-465d-979a-53eae342571a_106151_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: true,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2023-03-31T07:51:38Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2023-04-15T16:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2023-04-15",
        dateTBD: false,
        dateTBA: false,
        timeTBA: true,
        noSpecificTime: false,
      },
      timezone: "Europe/Berlin",
      status: {
        code: "offsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: false,
        segment: {
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l1",
          name: "Theatre",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7ll",
          name: "Miscellaneous",
        },
        family: false,
      },
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7na",
          name: "Arts & Theatre",
        },
        genre: {
          id: "KnvZfZ7v7l1",
          name: "Theatre",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v7ll",
          name: "Miscellaneous",
        },
        family: false,
      },
    ],
    promoter: {
      id: "12577",
      name: "Museumsdorf Cloppenburg",
    },
    promoters: [
      {
        id: "12577",
        name: "Museumsdorf Cloppenburg",
      },
    ],
    _links: {
      self: {
        href: "/discovery/v2/events/Z698xZC2Z17fAo9?locale=de-de",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917bG6f?locale=en-us",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/Z698xZC2Za6fS?locale=de-de",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Museumsdorf Cloppenburg",
          type: "venue",
          id: "Z698xZC2Za6fS",
          test: false,
          url: "https://www.ticketmaster.de/venue/museumsdorf-cloppenburg-cloppenburg-tickets/clomuseumd/740",
          locale: "de-de",
          images: [
            {
              ratio: "16_9",
              url: "https://media.ticketmaster.eu/germany/52f8ba572e88e8c7d41c526aeee941f3.png",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          postalCode: "49661",
          timezone: "Europe/Berlin",
          city: {
            name: "Cloppenburg",
          },
          country: {
            name: "Germany",
            countryCode: "DE",
          },
          address: {
            line1: "Bether Str. 6",
          },
          location: {
            longitude: "8.05492",
            latitude: "52.84908",
          },
          upcomingEvents: {
            _total: 0,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/Z698xZC2Za6fS?locale=de-de",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Museumsdorf Cloppenburg",
          type: "attraction",
          id: "K8vZ917bG6f",
          test: false,
          url: "https://www.ticketmaster.com.au/museumsdorf-cloppenburg-tickets/artist/2656076",
          locale: "en-us",
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/71a/8ec88564-616d-465d-979a-53eae342571a_106151_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/71a/8ec88564-616d-465d-979a-53eae342571a_106151_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/71a/8ec88564-616d-465d-979a-53eae342571a_106151_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/71a/8ec88564-616d-465d-979a-53eae342571a_106151_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/0e5/a2b10f30-a37e-487b-a798-becb182880e5_1079161_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
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
                id: "KnvZfZ7v7nE",
                name: "Cultural",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v7nt",
                name: "Cultural",
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
              href: "/discovery/v2/attractions/K8vZ917bG6f?locale=en-us",
            },
          },
        },
      ],
    },
  },
];

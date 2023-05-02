import { act } from "react-dom/test-utils";
const { create: actualCreate } = jest.requireActual("zustand");

const initialResource = "Events";
const initialSavedEvents = [
  "Z698xZC2Z173apK",
  "Z698xZC2Z17fAo_",
  "Z698xZC2Z17fd7s",
];
const initialVenuesPage = 0;
const initialEventsPage = 0;
const initialVenueSort = "distance,asc";
const initialEventSort = "date,asc";
const initialVenueKeywords = [""];
const initialEventKeywords = ["rock"];
const initialRange = 50000;
const initialCurrentLocation = true;
const initialLocation = "u281yb9d8";
const initialSegments = [
  { genre: "Arts & Theatre", isActive: false },
  { genre: "Film", isActive: true },
  { genre: "Miscellaneous", isActive: true },
  { genre: "Music", isActive: true },
  { genre: "Sports", isActive: false },
];

const storeResetFns = new Set();

export const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();

  initialState.resource = initialResource;
  initialState.savedEvents = initialSavedEvents;
  initialState.venuesPage = initialVenuesPage;
  initialState.eventsPage = initialEventsPage;
  initialState.venueSort = initialVenueSort;
  initialState.eventSort = initialEventSort;
  initialState.range = initialRange;
  initialState.currentLocation = initialCurrentLocation;
  initialState.location = initialLocation;
  initialState.segments = initialSegments;
  initialState.venueKeywords = initialVenueKeywords;
  initialState.eventKeywords = initialEventKeywords;
  initialState.setResource = jest.fn();
  initialState.toggleSaveEvent = jest.fn();
  initialState.setVenueSort = jest.fn();
  initialState.setEventSort = jest.fn();
  initialState.setVenuesPage = jest.fn();
  initialState.increaseVenuesPage = jest.fn();
  initialState.decreaseVenuesPage = jest.fn();
  initialState.setEventsPage = jest.fn();
  initialState.increaseEventsPage = jest.fn();
  initialState.decreaseEventsPage = jest.fn();
  initialState.setRange = jest.fn();
  initialState.toggleCurrentLocation = jest.fn();
  initialState.unsetCurrentLocation = jest.fn();
  initialState.setLocation = jest.fn();
  initialState.resetLocation = jest.fn();
  initialState.toggleSegment = jest.fn();
  initialState.addVenueKeywords = jest.fn();
  initialState.deleteVenueKeyword = jest.fn();
  initialState.addEventKeywords = jest.fn();
  initialState.deleteEventKeyword = jest.fn();
  initialState.resetVenuesFilter = jest.fn();
  initialState.resetEventsFilter = jest.fn();

  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

beforeEach(() => {
  jest.clearAllMocks();
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

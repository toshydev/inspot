import { act } from "react-dom/test-utils";
const { create: actualCreate } = jest.requireActual("zustand");

const initialPage = 0;
const initialResource = "events";
const initialSorting = "date,asc";
const initialKeywords = ["rock"];
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
const initialFilterMenu = { genre: false, search: false };

const storeResetFns = new Set();

export const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();

  initialState.page = initialPage;
  initialState.resource = initialResource;
  initialState.sorting = initialSorting;
  initialState.range = initialRange;
  initialState.currentLocation = initialCurrentLocation;
  initialState.location = initialLocation;
  initialState.segments = initialSegments;
  initialState.keywords = initialKeywords;
  initialState.filterMenu = initialFilterMenu;
  initialState.setRange = jest.fn();
  initialState.toggleCurrentLocation = jest.fn();
  initialState.unsetCurrentLocation = jest.fn();
  initialState.setLocation = jest.fn();
  initialState.resetLocation = jest.fn();
  initialState.toggleSegment = jest.fn();
  initialState.addKeywords = jest.fn();
  initialState.deleteKeyword = jest.fn();
  initialState.resetFilter = jest.fn();
  initialState.setFilterMenu = jest.fn();

  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

beforeEach(() => {
  jest.clearAllMocks();
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

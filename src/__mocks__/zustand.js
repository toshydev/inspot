import { act } from "react-dom/test-utils";
const { create: actualCreate } = jest.requireActual("zustand");

const initialCurrentLocation = true;
const initialCity = "Berlin";
const initialGenres = [
  { genre: "festival", isActive: false },
  { genre: "exhibit", isActive: true },
  { genre: "concert", isActive: true },
  { genre: "sightseeing", isActive: true },
  { genre: "sports", isActive: false },
];
const initialTags = ["music", "train", "goethe"];
const initialFilterMenu = { genre: false, search: false };

const storeResetFns = new Set();

export const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();

  initialState.currentLocation = initialCurrentLocation;
  initialState.city = initialCity;
  initialState.genres = initialGenres;
  initialState.tags = initialTags;
  initialState.filterMenu = initialFilterMenu;
  initialState.setCity = jest.fn();
  initialState.toggleGenre = jest.fn();
  initialState.addTags = jest.fn();
  initialState.deleteTag = jest.fn();
  initialState.resetFilter = jest.fn();
  initialState.setFilterMenu = jest.fn();
  initialState.toggleCurrentLocation = jest.fn();
  initialState.unsetCurrentLocation = jest.fn();

  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

beforeEach(() => {
  jest.clearAllMocks();
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

import { create } from "zustand";
import segments from "./lib/segments";

const useMapStore = create(() => {
  return {
    isMapScriptLoaded: false,
  };
});

const useFilterStore = create((set) => {
  return {
    page: 0,
    resource: "events",
    segment: "",
    sorting: "date,asc",
    keywords: [],
    range: 50000,
    userLocation: [],
    currentLocation: false,
    location: "",
    segments: segments
      .map((segment) => {
        return { name: segment.segment.name, isActive: false };
      })
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      }),
    filterMenu: { genre: false, search: false },
    setUserLocation: (coords) =>
      set(() => {
        return { userLocation: coords };
      }),
    setRange: (newRange) =>
      set(() => {
        return { range: newRange };
      }),
    toggleCurrentLocation: () =>
      set((state) => {
        return { currentLocation: !state.currentLocation };
      }),
    unsetCurrentLocation: () =>
      set(() => {
        return { currentLocation: false };
      }),
    setLocation: (geohash) =>
      set(() => {
        return { location: geohash };
      }),
    resetLocation: () =>
      set(() => {
        return { city: "" };
      }),
    toggleSegment: (segmentToActivate) =>
      set((state) => {
        return {
          segments: state.segments.map((segment) => {
            if (segment.name === segmentToActivate) {
              segment.isActive = !segment.isActive;
              return segment;
            }
            return segment;
          }),
        };
      }),
    addKeywords: (string) =>
      set((state) => {
        return {
          keywords: string.includes(",")
            ? string.split(",")
            : [...state.keywords, string],
        };
      }),
    deleteKeyword: (keywordToDelete) =>
      set((state) => {
        return {
          keywords: state.keywords.filter(
            (keyword) => keyword !== keywordToDelete
          ),
        };
      }),
    resetFilter: () =>
      set((state) => {
        return {
          segments: state.segments.map((segment) => {
            return { ...segment, isActive: false };
          }),
          keywords: [],
        };
      }),
    setFilterMenu: (menu) =>
      set((state) => {
        if (menu === "genre") {
          return {
            filterMenu: { genre: !state.filterMenu.genre, search: false },
          };
        } else if (menu === "search") {
          return {
            filterMenu: { genre: false, search: !state.filterMenu.search },
          };
        } else {
          return { filterMenu: { genre: false, search: false } };
        }
      }),
  };
});

export { useFilterStore, useMapStore };

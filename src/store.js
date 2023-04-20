import { create } from "zustand";
import segments from "./lib/segments";

const useMapStore = create(() => {
  return {
    isMapScriptLoaded: false,
  };
});

const useFilterStore = create((set) => {
  return {
    resource: "Events",
    savedVenues: [],
    savedEvents: [],
    venuesPage: 0,
    eventsPage: 0,
    venueSort: "name,asc",
    eventSort: "date,asc",
    venueKeywords: [],
    eventKeywords: [],
    range: 50000,
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
    setResource: (name) =>
      set(() => {
        return { resource: `${name[0].toUpperCase()}${name.slice(1)}` };
      }),
    toggleSaveVenue: (id) =>
      set((state) => {
        if (state.savedVenues.includes(id)) {
          return {
            savedVenues: state.savedVenues.filter((venue) => venue !== id),
          };
        }
        return { savedVenues: [...state.savedVenues, id] };
      }),
    toggleSaveEvent: (id) =>
      set((state) => {
        if (state.savedEvents.includes(id)) {
          return {
            savedEvents: state.savedEvents.filter((event) => event !== id),
          };
        }
        return { savedEvents: [...state.savedEvents, id] };
      }),
    setVenuesPage: (num) =>
      set(() => {
        return { venuesPage: num };
      }),
    increaseVenuesPage: () =>
      set((state) => {
        return { venuesPage: state.venuesPage + 1 };
      }),
    decreaseVenuesPage: () =>
      set((state) => {
        return { venuesPage: state.venuesPage - 1 };
      }),
    setEventsPage: (num) =>
      set(() => {
        return { eventsPage: num };
      }),
    increaseEventsPage: () =>
      set((state) => {
        return { eventsPage: state.eventsPage + 1 };
      }),
    decreaseEventsPage: () =>
      set((state) => {
        return { eventsPage: state.eventsPage - 1 };
      }),
    setVenueSort: (string) =>
      set(() => {
        return { venueSort: string };
      }),
    setEventSort: (string) =>
      set(() => {
        return { eventSort: string };
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
    addVenueKeywords: (string) =>
      set((state) => {
        return {
          venueKeywords: string.includes(",")
            ? string.split(",")
            : [...state.venueKeywords, string],
        };
      }),
    deleteVenueKeyword: (keywordToDelete) =>
      set((state) => {
        return {
          venueKeywords: state.venueKeywords.filter(
            (keyword) => keyword !== keywordToDelete
          ),
        };
      }),
    addEventKeywords: (string) =>
      set((state) => {
        return {
          eventKeywords: string.includes(",")
            ? string.split(",")
            : [...state.eventKeywords, string],
        };
      }),
    deleteEventKeyword: (keywordToDelete) =>
      set((state) => {
        return {
          eventKeywords: state.eventKeywords.filter(
            (keyword) => keyword !== keywordToDelete
          ),
        };
      }),
    resetVenuesFilter: () =>
      set(() => {
        return { venueKeywords: [] };
      }),
    resetEventsFilter: () =>
      set((state) => {
        return {
          segments: state.segments.map((segment) => {
            return { ...segment, isActive: false };
          }),
          eventKeywords: [],
          venueKeywords: [],
        };
      }),
  };
});

export { useFilterStore, useMapStore };

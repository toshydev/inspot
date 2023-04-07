import { create } from "zustand";
import uniqueGenres from "./utils/getGenres";

const useFilterStore = create((set) => {
  return {
    currentLocation: false,
    city: "",
    genres: uniqueGenres.map((genre) => {
      return { genre: genre, isActive: false };
    }),
    tags: [],
    filterMenu: { genre: false, search: false },
    toggleCurrentLocation: () =>
      set((state) => {
        return { currentLocation: !state.currentLocation };
      }),
    setCity: (name) =>
      set(() => {
        return { city: name };
      }),
    resetCity: () =>
      set(() => {
        return { city: "" };
      }),
    toggleGenre: (genreToActivate) =>
      set((state) => {
        return {
          genres: state.genres.map((genre) => {
            if (genre.genre === genreToActivate) {
              genre.isActive = !genre.isActive;
              return genre;
            }
            return genre;
          }),
        };
      }),
    addTags: (string) =>
      set(() => {
        return { tags: string.includes(",") ? string.split(",") : [string] };
      }),
    deleteTag: (tagToDelete) =>
      set((state) => {
        return { tags: state.tags.filter((tag) => tag !== tagToDelete) };
      }),
    resetFilter: () =>
      set((state) => {
        return {
          genres: state.genres.map((genre) => {
            return { ...genre, isActive: false };
          }),
          tags: [],
        };
      }),
    setFilterMenu: (menu) =>
      set((state) => {
        return menu === "genre"
          ? { filterMenu: { genre: !state.filterMenu.genre, search: false } }
          : menu === "search"
          ? { filterMenu: { genre: false, search: !state.filterMenu.search } }
          : { filterMenu: { genre: false, search: false } };
      }),
  };
});

export { useFilterStore };

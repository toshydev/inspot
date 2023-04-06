import { useState, useEffect } from "react";
import { useFilterStore } from "../store";

function useFilter(events) {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const genres = useFilterStore((state) => state.genres);
  const tags = useFilterStore((state) => state.tags);

  const setGenres = genres.filter((genre) => genre.isActive).length;

  useEffect(() => {
    if (setGenres === 0 && tags.length > 0) {
      setFilteredEvents(
        events.filter((event) => {
          return tags.some((tag) => {
            return (
              event.title.toLowerCase().includes(tag) ||
              event.description.toLowerCase().includes(tag)
            );
          });
        })
      );
    }
    if (tags.length === 0 && setGenres > 0) {
      setFilteredEvents(
        events.filter((event) => {
          return genres.some((genre) => {
            return event.type === genre.genre && genre.isActive;
          });
        })
      );
    }
    if (tags.length > 0 && setGenres > 0) {
      setFilteredEvents(
        events.filter((event) => {
          return genres.some((genre) => {
            return tags.every((tag) => {
              return (
                event.type === genre.genre &&
                genre.isActive &&
                (event.title.toLowerCase().includes(tag) ||
                  event.description.toLowerCase().includes(tag))
              );
            });
          });
        })
      );
    }
    if (tags.length === 0 && setGenres === 0) {
      setFilteredEvents(events);
    }
  }, [events, genres, tags, setGenres]);

  return filteredEvents;
}

export default useFilter;

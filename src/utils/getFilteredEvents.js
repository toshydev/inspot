function getFilteredEvents(events, setGenres, genres, tags) {
  if (setGenres === 0 && tags.length > 0) {
    return events.filter((event) => {
      return tags.some((tag) => {
        return (
          event.title.toLowerCase().includes(tag) ||
          event.description.toLowerCase().includes(tag)
        );
      });
    });
  }
  if (tags.length === 0 && setGenres > 0) {
    return events.filter((event) => {
      return genres.some((genre) => {
        return event.type === genre.genre && genre.isActive;
      });
    });
  }
  if (tags.length > 0 && setGenres > 0) {
    return events.filter((event) => {
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
    });
  }
  if (tags.length === 0 && setGenres === 0) {
    return events;
  }
}

export default getFilteredEvents;

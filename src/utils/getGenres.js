import { events } from "../lib/data";

const genres = events.map((event) => event.type);

const uniqueGenres = genres.filter((genre, index, array) => {
  return index === array.indexOf(genre);
});

export default uniqueGenres;

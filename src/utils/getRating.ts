import { Review } from "./types";

export default function getRating(data: Review[]) {
  const dataWithRating = data.filter((entry) => entry.rating);
  const ratings = dataWithRating.map((entry) => entry.rating);
  const sumOfRatings = ratings.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const averageRating = (sumOfRatings / dataWithRating.length).toFixed(1);
  return averageRating;
}

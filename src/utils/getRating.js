export default function getRating(data) {
  const dataWithRating = data.filter((entry) => entry.rating);
  const sumOfRatings = dataWithRating.reduce((a, b) => a.rating + b.rating);
  const averageRating = sumOfRatings / dataWithRating.length;
  return averageRating;
}

import { events } from "~/lib/data";

const cities = events.map((event) => {
  const addressArray = event.location.address.split(",");
  const postalCity = addressArray[addressArray.length - 2];
  return postalCity?.replace(/\d+/, "").trim();
});

export const uniqueCities = cities.filter((city, index, array) => {
  return index === array.indexOf(city);
});

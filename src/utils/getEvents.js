export function getSortedEvents(events) {
  return events.slice().sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateA - dateB;
  });
}

export function getEventsOfCity(city, events) {
  return city
    ? events.filter((event) => {
        const addressArray = event.location.address.split(",");
        const postalCity = addressArray[addressArray.length - 2];
        const cityString = postalCity?.replace(/\d+/, "").trim();
        return cityString === city;
      })
    : events;
}

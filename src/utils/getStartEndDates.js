function getPreviousDay(date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);
  const dateArray = previous.toISOString().split("T");
  const withoutT = dateArray[0] + "T00:00:00Z";

  return withoutT;
}

function getNextDay(date = new Date()) {
  const next = new Date(date.getTime());
  next.setDate(date.getDate() + 1);
  const dateArray = next.toISOString().split("T");
  const withoutT = dateArray[0] + "T00:00:00Z";

  return withoutT;
}

export { getPreviousDay, getNextDay };

import { Event } from "./types";

export default function getDatetime(data: Event) {
  let date;
  if (data.dates.start.dateTime) {
    date = new Date(data.dates.start.dateTime);
  } else if (data.dates.start.localDate && data.dates.start.localTime) {
    date = new Date(
      data.dates.start.localDate + "T" + data.dates.start.localTime
    );
  } else if (data.dates.start.localDate) {
    date = new Date(data.dates.start.localDate + "T" + "00:00:00Z");
  }
  return {
    date: date,
    formattedDate: new Intl.DateTimeFormat("de-DE").format(date),
  };
}

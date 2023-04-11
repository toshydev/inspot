export default function getTimeString(difference) {
  if (difference > 86400) {
    return parseInt(difference / 60 / 60 / 24) + " days";
  } else if (difference > 3600) {
    return parseInt(difference / 60 / 60) + " hours";
  } else if (difference > 60) {
    return parseInt(difference / 60) + " minutes";
  }
}

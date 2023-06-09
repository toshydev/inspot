export default function getTimeString(difference: number) {
  if (difference > 86400) {
    return `${(difference / 60 / 60 / 24).toFixed(0)} days`;
  } else if (difference > 3600) {
    return `${(difference / 60 / 60).toFixed(0)} hours`;
  } else if (difference > 60) {
    return `${(difference / 60).toFixed(0)} minutes`;
  }
}

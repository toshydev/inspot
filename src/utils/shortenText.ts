export default function shortenText(string: string) {
  if (string.length > 25) {
    return string.slice(0, 20) + "...";
  }
  return string;
}

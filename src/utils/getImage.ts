import { Image } from "./types";

export default function getImage(images: Image[]) {
  const imageWidths = images
    .filter((image) => image.ratio === "16_9")
    .map((filteredImage) => filteredImage.width);
  const maxWidth = Math.max(...imageWidths);
  const index = images.findIndex(
    (image) => image.ratio === "16_9" && image.width === maxWidth
  );
  return images[index];
}

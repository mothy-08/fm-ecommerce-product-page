import { useState } from "react";
import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import Product1 from "../assets/images/image-product-1.jpg";
import Product2 from "../assets/images/image-product-2.jpg";
import Product3 from "../assets/images/image-product-3.jpg";
import Product4 from "../assets/images/image-product-4.jpg";

const images = [
  {
    src: Product1,
    alt: "A pair of tan and white leather sneakers with orange heel tabs; one shoe is upright, while the other is inverted in the background to show the white treaded sole.",
    thumbnail: Thumbnail1,
  },
  {
    src: Product2,
    alt: "A pair of tan and white leather sneakers with orange heel tabs; one shoe is upright, while the other is inverted in the background to show the white treaded sole.",
    thumbnail: Thumbnail2,
  },
  {
    src: Product3,
    alt: "A single tan and white leather sneaker balanced on two stacked white river stones, featuring a curved orange paper backdrop.",
    thumbnail: Thumbnail3,
  },
  {
    src: Product4,
    alt: "A side profile of a tan and white sneaker balanced horizontally on a stack of white river stones against a solid orange background.",
    thumbnail: Thumbnail4,
  },
];

const previewMap = new Map<string, { src: string; alt: string }>();

for (const { thumbnail, src, alt } of images) {
  previewMap.set(thumbnail, { src, alt });
}

export function ProductThumbnails() {
  const [selected, setSelected] = useState(Thumbnail1);
  const { src, alt } = previewMap.get(selected)!;

  return (
    <div className="flex max-w-111 flex-col gap-7.5">
      <img
        className="rounded-2xl"
        src={src}
        alt={alt}
        width="444"
        height="444"
      />

      <ul className="flex gap-7.5">
        {images.map(({ thumbnail }, i) => (
          <li key={thumbnail}>
            <button
              onClick={() => setSelected(thumbnail)}
              className={`max-w-22 overflow-clip rounded-lg ${selected === thumbnail ? "outline-2 outline-orange-400" : ""}`}
              aria-label={`Preview thumbnail ${i + 1}`}
            >
              <img
                className={selected === thumbnail ? "opacity-50" : ""}
                src={thumbnail}
                alt=""
                width="88"
                height="88"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

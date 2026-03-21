import "../carousel.css";
import Product1 from "../assets/images/image-product-1.jpg";
import Product2 from "../assets/images/image-product-2.jpg";
import Product3 from "../assets/images/image-product-3.jpg";
import Product4 from "../assets/images/image-product-4.jpg";

const images = [
  {
    src: Product1,
    alt: "A pair of tan and white leather sneakers with orange heel tabs; one shoe is upright, while the other is inverted in the background to show the white treaded sole.",
  },
  {
    src: Product2,
    alt: "A pair of tan and white leather sneakers with orange heel tabs; one shoe is upright, while the other is inverted in the background to show the white treaded sole.",
  },
  {
    src: Product3,
    alt: "A single tan and white leather sneaker balanced on two stacked white river stones, featuring a curved orange paper backdrop.",
  },
  {
    src: Product4,
    alt: "A side profile of a tan and white sneaker balanced horizontally on a stack of white river stones against a solid orange background.",
  },
];

export function ImageCarousel() {
  return (
    <ul className="image-carousel">
      {images.map(({ src, alt }) => (
        <li key={src} className="flex-[0_0_100%] snap-center">
          <img
            className="max-h-75 object-cover"
            src={src}
            alt={alt}
            width="1000"
            height="1000"
          />
        </li>
      ))}
    </ul>
  );
}

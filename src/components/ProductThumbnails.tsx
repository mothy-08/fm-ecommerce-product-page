import Product1 from "../assets/images/image-product-1.jpg";
import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const thumbnails = [
  {
    src: Thumbnail1,
  },
  {
    src: Thumbnail2,
  },
  {
    src: Thumbnail3,
  },
  {
    src: Thumbnail4,
  },
];

export function ProductThumbnails() {
  return (
    <>
      <div className="flex max-w-111 flex-col gap-8">
        <img
          className="rounded-2xl"
          src={Product1}
          alt="A pair of tan and white leather sneakers with orange heel tabs; one shoe is upright, while the other is inverted in the background to show the white treaded sole."
        />

        <ul className="flex gap-7.5">
          {thumbnails.map(({ src }, i) => (
            <li key={src}>
              <button
                className="max-w-22"
                aria-label={`Preview thumbnail ${i + 1}`}
              >
                <img className="rounded-lg" src={src} alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

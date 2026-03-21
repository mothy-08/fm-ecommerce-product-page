import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import CartIcon from "../assets/icons/icon-cart.svg";
import MinusSign from "../assets/icons/icon-minus.svg";
import PlusSign from "../assets/icons/icon-plus.svg";
import { ImageCarousel } from "./ImageCarousel";
import { ProductThumbnails } from "./ProductThumbnails";

export function ProductCard() {
  const isDesktop = useMediaQuery({ query: "(min-width: 48rem)" });
  const [qty, setQty] = useState(0);

  function incrementQty() {
    setQty(qty + 1);
  }

  function decrementQty() {
    if (qty > 0) setQty(qty - 1);
  }

  return (
    <article className="md:w-fluid-header-width mx-auto max-w-278.5 md:grid md:grid-cols-2 md:place-items-center">
      {isDesktop ? <ProductThumbnails /> : <ImageCarousel />}
      <div></div>

      <div className="space-y-4 p-6 md:col-start-2 md:row-start-1 md:space-y-8">
        <div className="space-y-4 md:space-y-8">
          <span
            aria-hidden="true"
            className="text-xs font-bold tracking-widest text-blue-600 uppercase"
          >
            Sneaker Company
          </span>

          <h1 className="text-fluid-heading mt-2 font-bold md:mt-6">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-blue-600">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>

        <div className="grid grid-cols-[120px_1fr_1fr] items-center justify-items-start md:grid-cols-[repeat(2,120px)]">
          <data className="text-3xl font-bold" value="125">
            <span className="sr-only">Discounted price: </span>
            $125.00
          </data>

          <data
            className="rounded-sm bg-black px-2 py-0.5 text-white"
            value=".50"
          >
            <span className="sr-only">Discount rate: </span>
            50%
          </data>

          <data
            className="justify-self-end font-bold text-blue-600 line-through md:justify-self-start"
            value="250"
          >
            <span className="sr-only">Original price: </span>
            $250.00
          </data>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="qty-wrapper min-w-39">
            <button aria-label="Decrease quantity by 1" onClick={decrementQty}>
              <img src={MinusSign} alt="" width="12" height="4" />
            </button>

            <data className="flex-1 text-center" value={qty}>
              {qty}
            </data>

            <button aria-label="Increase quantity by 1" onClick={incrementQty}>
              <img src={PlusSign} alt="" width="12" height="12" />
            </button>
          </div>

          <button className="primary-btn">
            <img src={CartIcon} alt="" width="22" height="20" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "../assets/icons/icon-menu.svg";
import Logo from "../assets/icons/logo.svg";
import CloseIcon from "../assets/icons/icon-close.svg";
import CartIcon from "../assets/icons/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import { NavLinks } from "./NavLinks";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const isDesktop = useMediaQuery({ query: "(min-width: 48rem)" });
  const [showMobileNav, setShowMobileNav] = useState(false);
  const mobileNavRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = mobileNavRef.current;
    if (!dialog) return;

    // Sync state when dialog is closed using Esc key
    const handleClose = () => setShowMobileNav(false);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  useEffect(() => {
    const dialog = mobileNavRef.current;
    if (!dialog) return;

    if (showMobileNav && !isDesktop) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [showMobileNav, isDesktop]);

  return (
    <header className="gap-fluid-header md:w-fluid-header-width fixed top-0 right-0 left-0 mx-auto flex items-center justify-between p-6 md:border-b md:border-b-gray-200 md:px-0">
      {!isDesktop && (
        <>
          <button
            onClick={() => setShowMobileNav(true)}
            aria-label="Open navigation menu"
          >
            <img src={HamburgerMenu} alt="" width="16" height="15" />
          </button>

          <dialog
            ref={mobileNavRef}
            className="h-full max-h-[unset] w-62.5 space-y-14 p-6"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setShowMobileNav(false);
              }
            }}
          >
            <button
              autoFocus
              onClick={() => setShowMobileNav(false)}
              aria-label="Close navigation menu"
            >
              <img src={CloseIcon} alt="" width="14" height="15" />
            </button>

            <NavLinks />
          </dialog>
        </>
      )}

      <a className="flex-1 md:flex-initial" href="/">
        <img src={Logo} alt="sneakers - Home" width="138" height="20" />
      </a>

      {isDesktop && <NavLinks />}

      <button aria-label="Open cart" popoverTarget="cart-dialog">
        <img src={CartIcon} alt="" width="22" height="20" />
      </button>

      <dialog id="cart-dialog" autoFocus popover="auto">
        <h2>Cart</h2>
        <div aria-hidden="true"></div>
        <ul></ul>
        <button hidden>Checkout</button>
      </dialog>

      <button className="w-fluid-avatar" aria-label="Open profile">
        <img src={Avatar} alt="" width="100" height="100" />
      </button>
    </header>
  );
}

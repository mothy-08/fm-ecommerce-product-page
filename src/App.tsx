import { useState } from "react";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";

export interface CartItem {
  src: string;
  name: string;
  price: number;
  qty: number;
}

export function App() {
  const [cartItem, setCartItem] = useState<CartItem | undefined>(undefined);

  return (
    <>
      <Header cartItem={cartItem} />
      <main className="flex min-h-screen items-center justify-center">
        <ProductCard onAddToCart={setCartItem} />
      </main>
    </>
  );
}

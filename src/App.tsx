import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";

export function App() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <ProductCard />
      </main>
    </>
  );
}

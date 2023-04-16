import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { ProductGrid } from "./components/ProductGrid";
import { asyncApiRequest } from "./tools/requests";

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  // Store the products in the state of the App component. It would be better to save it in Redux store, but
  // we want to keep this example simple
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // This effect is called every time when the component is updated and (re)mounted
  // Therefore we need to do a check before re-loading products every time
  useEffect(() => {
    if (products.length === 0) {
      loadProducts();
    } else {
      console.log("useEffect called again, but products already loaded");
    }
  });

  return (
    <>
      <Navigation />
      <main>
        <ProductGrid products={products} errorMessage={errorMessage} />
      </main>
    </>
  );

  /**
   * Load products from the backend
   */
  async function loadProducts() {
    console.log("Fetching products from the backend...");
    try {
      const p = await asyncApiRequest("GET", "/products", null);
      setProducts(p);
    } catch (error) {
      onProductLoadError(error);
    }
  }

  function onProductLoadError(error) {
    setErrorMessage("Could not receive products from the backend API!");
    console.error(error.message);
  }
}

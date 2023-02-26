import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { MainPage } from "./MainPage";

// Pretend that these products are loaded from a backend
const FAKE_PRODUCTS = [
  {
    id: 1,
    name: "Jeans",
    description: "Blue Jeans",
    price: 123,
  },
  {
    id: 2,
    name: "Sneakers",
    description: "Regular sneakers",
    price: 226.99,
  },
  {
    id: 3,
    name: "T-shirt",
    description: "A shirt that reminds everyone of 'green thinking'",
    price: 57,
  },
];

// Products loading takes 3 seconds
const PRODUCT_LOAD_TIMEOUT = 3000;

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  const [products, setProducts] = useState([]);

  // Call loadProducts() on every re-render of the component (including the first one)
  useEffect(loadProducts);
  // Alternatively, we could include [] as a dependency. This would mean that loadProducts would be called only once
  // useEffect(loadProducts, []);

  return (
    <>
      <Navigation products={products} />
      <MainPage products={products} />
    </>
  );

  /**
   * Pretend that we are loading products
   */
  function loadProducts() {
    if (products.length === 0) {
      console.log("Loading products...");
      setTimeout(setFakeProducts, PRODUCT_LOAD_TIMEOUT);
    } else {
      console.log(
        "loadProducts() called (again), but we don't fetch the data again"
      );
    }
  }

  /**
   * Pretend that the fake products are returned from an API, set them as current products
   */
  function setFakeProducts() {
    setProducts(FAKE_PRODUCTS);
  }
}

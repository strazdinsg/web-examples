import { Navigation } from "./Navigation";
import { ProductContext } from "./ProductContext";
import { useEffect, useState } from "react";
import { MainSection } from "./MainSection";

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

  // This effect is called every time when the component is updated and (re)mounted
  // Therefore we need to do a check before re-loading products every time
  useEffect(() => {
    if (products.length === 0) {
      loadProducts();
    }
  });

  // We wrap the application in a ProductContext and bind the products from the App's state to the products
  // inside the ProductContext
  return (
    <ProductContext.Provider value={products}>
      <Navigation />
      <MainSection />
    </ProductContext.Provider>
  );

  /**
   * Pretend that we are loading products
   */
  function loadProducts() {
    console.log("Loading products...");
    setTimeout(setFakeProducts, PRODUCT_LOAD_TIMEOUT);
  }

  /**
   * Pretend that the fake products are returned from an API, set them as current products
   */
  function setFakeProducts() {
    console.log("Products received from the 'backend API'");
    setProducts(FAKE_PRODUCTS);
  }
}

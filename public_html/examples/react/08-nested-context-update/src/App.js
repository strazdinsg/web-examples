import { Navigation } from "./Navigation";
import { ProductContext } from "./ProductContext";
import { useEffect, useState } from "react";
import { MainSection } from "./MainSection";
import { FAKE_PRODUCTS } from "./ProductData";

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

  // Here we pass both the products and a reference to delete-function as the data for the context
  return (
    <ProductContext.Provider
      value={{ products: products, handleDelete: deleteProduct }}
    >
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

  /**
   * Delete a product with specific ID
   * @param id ID of the product to delete
   */
  function deleteProduct(id) {
    console.log("Deleting product with ID = " + id);
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  }
}

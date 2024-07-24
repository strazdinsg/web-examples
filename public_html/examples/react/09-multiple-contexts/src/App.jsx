import { Navigation } from "./components/Navigation";
import { ProductContext } from "./context/ProductContext";
import { useEffect, useState } from "react";
import { MainSection } from "./components/MainSection";
import { FAKE_PRODUCTS } from "./ProductData";
import { darkTheme, lightTheme, ThemeContext } from "./context/ThemeContext";

// Products loading takes 3 seconds
const PRODUCT_LOAD_TIMEOUT = 3000;

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState(lightTheme);

  // This effect is called every time when the component is updated and (re)mounted
  useEffect(() => {
    if (products.length === 0) {
      loadProducts();
    }
  });

  // Here we pass both the products and a reference to delete-function as the data for the context
  // In another context we pass the dark/light theme and a function for toggling it
  return (
    <ProductContext.Provider
      value={{ products: products, handleDelete: deleteProduct }}
    >
      <ThemeContext.Provider
        value={{ theme: theme, toggleTheme: toggleDarkTheme }}
      >
        <Navigation />
        <MainSection />
      </ThemeContext.Provider>
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

  /**
   * Toggle dark/light theme
   */
  function toggleDarkTheme() {
    if (theme === lightTheme) {
      console.log("Dark theme");
      setTheme(darkTheme);
    } else {
      console.log("Light theme");
      setTheme(lightTheme);
    }
  }
}

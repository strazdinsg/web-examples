import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { ProductGrid } from "./ProductGrid";

/**
 * Component representing the main section of the page
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
  const products = useContext(ProductContext);
  if (products.length > 0) {
    return <ProductGrid />;
  } else {
    return <p className="loading">Loading products...</p>;
  }
}

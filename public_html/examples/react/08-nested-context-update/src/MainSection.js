import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { ProductGrid } from "./ProductGrid";

/**
 * Component representing the main section
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
  const productContext = useContext(ProductContext);
  const products = productContext.products;

  if (products.length > 0) {
    return <ProductGrid />;
  } else {
    return <p className="loading">Loading products...</p>;
  }
}

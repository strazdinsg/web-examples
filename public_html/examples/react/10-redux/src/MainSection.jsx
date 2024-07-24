import { ProductGrid } from "./ProductGrid";
import { useSelector } from "react-redux";

/**
 * Component representing the main section
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
  const products = useSelector((state) => state.productStore.products);

  if (products.length > 0) {
    return <ProductGrid />;
  } else {
    return <p className="loading">Loading products...</p>;
  }
}

import { ProductCard } from "./ProductCard";
import "./ProductGrid.css";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

/**
 * Component representing the product grid
 * @return {JSX.Element}
 * @constructor
 */
export function ProductGrid() {
  const products = useContext(ProductContext);

  if (products.length > 0) {
    return (
      <div className="product-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    );
  } else {
    return <p className="loading">Loading products...</p>;
  }
}

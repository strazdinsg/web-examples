import { ProductCard } from "./ProductCard";
import "./ProductGrid.css";

/**
 * Component representing the product grid
 * @param props Props containing the products array and error message
 * @return {JSX.Element}
 * @constructor
 */
export function ProductGrid(props) {
  if (props.products.length > 0) {
    return (
      <div className="product-container">
        {props.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    );
  } else if (props.errorMessage) {
    return <p className="error">{props.errorMessage}</p>;
  } else {
    return <p className="loading">Loading products...</p>;
  }
}

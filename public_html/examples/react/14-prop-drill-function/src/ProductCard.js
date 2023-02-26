import "./ProductCard.css";
import { ProductDeleteButton } from "./ProductDeleteButton";

/**
 * A component representing a single product card
 * @param props Properties containing the product object
 * @return {JSX.Element}
 * @constructor
 */
export function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          src={require("./img/products/" + props.product.id + ".jpg")}
          alt="product"
        />
      </div>
      <h2 className="product-card-title">{props.product.name}</h2>
      <h3 className="product-card-price">{props.product.price} Kr</h3>
      <div className="product-card-description">
        {props.product.description}
      </div>
      <ProductDeleteButton
        productId={props.product.id}
        deleteFunction={props.deleteFunction}
      />
    </div>
  );
}

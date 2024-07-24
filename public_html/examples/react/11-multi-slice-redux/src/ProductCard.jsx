import "./ProductCard.css";
import { AddToCartButton } from "./AddToCartButton";
import { useSelector } from "react-redux";

/**
 * A component representing a single product card
 * @param props Properties containing the product object
 * @return {JSX.Element}
 * @constructor
 */
export function ProductCard(props) {
  const user = useSelector((state) => state.userStore.user);

  // Adding items to cart allowed only when user has logged in
  let addToCartButton = null;
  if (user) {
    addToCartButton = <AddToCartButton product={props.product} />;
  }
  const imageUrl = new URL(
    "./img/products/" + props.product.id + ".jpg",
    import.meta.url
  ).href;

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={imageUrl} alt="a product" />
      </div>
      <h2 className="product-card-title">{props.product.name}</h2>
      <h3 className="product-card-price">{props.product.price} Kr</h3>
      <div className="product-card-description">
        {props.product.description}
      </div>
      {addToCartButton}
    </div>
  );
}

import "./ProductCard.css";
import { ProductDeleteButton } from "./ProductDeleteButton";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * A component representing a single product card
 * @param props Properties containing the product object
 * @return {JSX.Element}
 * @constructor
 */
export function ProductCard(props) {
  const { theme } = useContext(ThemeContext);
  const imageUrl = new URL(
    "../img/products/" + props.product.id + ".jpg",
    import.meta.url
  ).href;

  return (
    <div className={"product-card " + theme.themeClass}>
      <div className="product-card-image">
        <img src={imageUrl} alt="a product" />
      </div>
      <h2 className="product-card-title">{props.product.name}</h2>
      <h3 className="product-card-price">{props.product.price} Kr</h3>
      <div className="product-card-description">
        {props.product.description}
      </div>
      <ProductDeleteButton id={props.product.id} />
    </div>
  );
}

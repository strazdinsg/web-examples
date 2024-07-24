import "./AddToCartButton.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./redux/shoppingCartSlice";

/**
 * Represents the component for adding a product to the shopping cart
 * @param props Properties, containing the product id
 * @return {JSX.Element}
 * @constructor
 */
export function AddToCartButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      className="add-to-cart-button"
      onClick={() => dispatch(addItemToCart(props.product))}
    >
      Add to cart
    </button>
  );
}

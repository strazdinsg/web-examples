import "./ProductDeleteButton.css";
import { useDispatch } from "react-redux";
import { deleteProduct } from "./redux/productSlice";

/**
 * Represents the component for deleting the product
 * @param props Properties, containing the product id
 * @return {JSX.Element}
 * @constructor
 */
export function ProductDeleteButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      className="product-delete"
      onClick={() => dispatch(deleteProduct(props.id))}
    >
      Delete
    </button>
  );
}

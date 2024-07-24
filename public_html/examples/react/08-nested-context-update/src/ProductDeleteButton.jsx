import "./ProductDeleteButton.css";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

/**
 * Represents the component for deleting the product
 * @param props Properties, containing the product id
 * @return {JSX.Element}
 * @constructor
 */
export function ProductDeleteButton(props) {
  const { handleDelete } = useContext(ProductContext);

  return (
    <button className="product-delete" onClick={() => handleDelete(props.id)}>
      Delete
    </button>
  );
}

import "./DeleteCartItemButton.css";
import { useDispatch } from "react-redux";
import { emptyCart, removeCartItem } from "./redux/shoppingCartSlice";

/**
 * Button for deleting a single item from the shopping cart
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function DeleteCartItemButton(props) {
  const dispatch = useDispatch();

  // Decide what the button will do - remove a single item or empty the whole cart
  let actionFunction;
  if (props.id === DELETE_ALL) {
    actionFunction = function () {
      dispatch(emptyCart());
    };
    // this is an alternative syntax - shorter, but perhaps harder to understand for beginners?
    // actionFunction = () => dispatch(emptyCart)
  } else {
    actionFunction = function () {
      dispatch(removeCartItem(props.id));
    };
  }

  return (
    <div className="delete-cart-item-button" onClick={actionFunction}>
      {/* Icon from https://heroicons.com/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  );
}

export const DELETE_ALL = "all";

import "./ShoppingCart.css";
import { useSelector } from "react-redux";
import { DELETE_ALL, DeleteCartItemButton } from "./DeleteCartItemButton";

/**
 * Component representing the shopping cart
 * @return {JSX.Element}
 * @constructor
 */
export function ShoppingCart() {
  const cart = useSelector((state) => state.cartStore.cart);

  // Generate the cart item list and total price
  let cartItems = [];
  let totalPrice = 0;
  for (let itemId in cart) {
    const item = cart[itemId];
    const price = item.product.price * item.count;
    totalPrice += price;
    const itemRow = (
      <tr className="cart-item" key={itemId}>
        <td className="cart-item-name">{item.product.name}</td>
        <td className="cart-item-qty">{item.count}</td>
        <td className="cart-item-price">{price.toFixed(2)} Kr</td>
        <td className="cart-item-action">
          <DeleteCartItemButton id={"" + item.product.id} />
        </td>
      </tr>
    );
    cartItems.push(itemRow);
  }

  let cartContent;
  if (totalPrice > 0) {
    cartContent = (
      <table className="cart-table">
        <thead>
          <tr>
            <th className="cart-item-name">Item</th>
            <th className="cart-item-qty">Quantity</th>
            <th className="cart-item-price">Price</th>
            <th className="cart-item-action"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems}
          <tr className="total-price-row">
            <td className="total-price-title" colSpan="2">
              Total:
            </td>
            <td className="total-price-value">{totalPrice.toFixed(2)} Kr</td>
            <td className="cart-item-action">
              <DeleteCartItemButton id={DELETE_ALL} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    cartContent = <p>The cart is empty</p>;
  }

  return (
    <div className="cart-container">
      <h1>Order details</h1>
      {cartContent}
    </div>
  );
}

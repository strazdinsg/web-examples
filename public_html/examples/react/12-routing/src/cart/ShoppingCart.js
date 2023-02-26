import "./ShoppingCart.css";
import { FAKE_CART } from "../FakeData";

/**
 * Component representing the shopping cart section
 * @return {JSX.Element}
 * @constructor
 */
export function ShoppingCart() {
  const cart = FAKE_CART;

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
      </tr>
    );
    cartItems.push(itemRow);
  }

  return (
    <div className="cart-container">
      <h1>Order details</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th className="cart-item-name">Item</th>
            <th className="cart-item-qty">Quantity</th>
            <th className="cart-item-price">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems}
          <tr className="total-price-row">
            <td className="total-price-title" colSpan="2">
              Total:
            </td>
            <td className="total-price-value">{totalPrice.toFixed(2)} Kr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

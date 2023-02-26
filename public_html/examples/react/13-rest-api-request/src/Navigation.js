import "./Navigation.css";

/**
 * Represents navigation.
 * No real navigation yet, just placeholders.
 * @returns {JSX.Element}
 * @constructor
 */
export function Navigation() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li className="selected">Products</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
}

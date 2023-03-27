/**
 * Main navigation component
 * @returns {JSX.Element}
 * @constructor
 */
export function Navigation() {
  // TODO - fix the links
  return (
    <nav>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="active">
          <a href="books.html">Books</a>
        </li>
        <li>
          <a href="about.html">About us</a>
        </li>
      </ul>
    </nav>
  );
}

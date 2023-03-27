/**
 * Component for one book card
 * @param title Title of the book
 * @param img Reference to the book cover image
 * @returns {JSX.Element}
 * @constructor
 */
export function BookCard({ title, img }) {
  return (
    <div className="card">
      <div className="book-image-container">
        <img src={img} alt={`Cover of the book '${title}'`} />
      </div>
      <p>{title}</p>
    </div>
  );
}

import img1 from "./assets/img/books/1.jpg";
import img2 from "./assets/img/books/2.jpg";
import img3 from "./assets/img/books/3.jpg";
import img4 from "./assets/img/books/4.jpg";
import img5 from "./assets/img/books/5.jpg";
import img6 from "./assets/img/books/6.jpg";
import { BookCard } from "./BookCard";

// You would do this differently in real projects, this is a hack...
const books = loadBooksFromApi();

/**
 * The main content of our page. You would want to introduce Router here later.
 * @returns {JSX.Element}
 * @constructor
 */
export function MainContent() {
  return (
    <div className="main-container">
      <main>
        <h1>Our books</h1>
        <p>We have the following books in our collection:</p>
        <div className="book-container">
          {books.map((book) => (
            <BookCard title={book.title} img={book.img} />
          ))}
        </div>
      </main>
    </div>
  );
}

/**
 * Pretend that we are loading data from the backend.
 * @returns {[{img: *, title: string}]} An array of book data objects.
 */
function loadBooksFromApi() {
  return [
    { title: "Learning Web design", img: img1 },
    { title: "Computer networking: A Top-Down Approach", img: img2 },
    { title: "The Truth About Chuck Norris", img: img3 },
    { title: "12 Rules for Life: An Antidote to Chaos", img: img4 },
    { title: "Becoming", img: img5 },
    { title: "This is Going to Hurt", img: img6 },
  ];
}

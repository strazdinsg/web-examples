import CardListing from "../components/CardListing";

/**
 * The HOME page (index page) of the website, response to URL "/"
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePage() {
  return (
    <main>
      <h1>Check out our great products</h1>
      <CardListing />
    </main>
  );
}

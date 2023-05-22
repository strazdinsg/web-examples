import { fetcher } from "../lib/apis";
import useSWR from "swr";

/**
 * The main component for the Home page (index).
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePage() {
  const { data, error } = useSWR(
    "https://api.chucknorris.io/jokes/random?category=science",
    fetcher
  );

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const joke = data ? data.value : "Loading...";

  return (
    <article>
      <h1>Data fetching example</h1>
      <p>Here is a dummy data fetched from an external API:</p>
      <p>{joke}</p>
    </article>
  );
}

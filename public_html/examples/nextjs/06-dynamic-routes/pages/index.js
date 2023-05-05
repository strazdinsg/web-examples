import Link from "next/link";
import { getPostIds } from "../lib/posts";

/**
 * Component for the Home-page (index).
 *
 * @param postIds IDs of all the available posts
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home({ postIds }) {
  return (
    <main>
      <h1>Welcome</h1>
      <p>Welcome to the page. See our posts here:</p>
      <ul>
        {postIds.map((id) => (
          <li key={id}>
            <Link href={`posts/${id}`}>Post {id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

/**
 * This function returns the static properties for this component
 * asynchronously - The IDs of all available posts.
 *
 * @param params
 * @returns {Promise<{props: {postIds: number[]}}>}
 */
export async function getStaticProps({ params }) {
  return {
    props: {
      postIds: getPostIds(),
    },
  };
}

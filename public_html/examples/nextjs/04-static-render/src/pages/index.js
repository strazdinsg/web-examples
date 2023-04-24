import { readPostData } from "../../lib/data-access";

/**
 * Component representing the index page.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home({ post }) {
  return (
    <article>
      <h1>Static page pre-rendering</h1>
      <p>{post}</p>
    </article>
  );
}

/**
 * This function will be automatically called by Next.js at build time to
 * prepare the props passed to the Home component.
 * @returns {Promise<{props: {post: string}}>}
 */
export async function getStaticProps() {
  return { props: { post: readPostData() } };
}

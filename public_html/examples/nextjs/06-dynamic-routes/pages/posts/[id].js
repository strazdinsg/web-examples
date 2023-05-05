import { getPostData, getPostIds } from "../../lib/posts";

/**
 * The main component for a page displaying a single post.
 *
 * @param post The post to display
 * @returns {JSX.Element}
 * @constructor
 */
export default function PostPage({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p>
        <a href="../../">Go back</a>
      </p>
    </article>
  );
}

/**
 * This function is used to pre-render post-page for all available posts.
 * It returns the list of all available paths. These paths will be then
 * traversed, on build time. The `params` property for each path contains the
 * data that will be used to construct the static props for the PostPage
 * component.
 * @returns {Promise<{paths: {params: {id: string}}[], fallback: boolean}>}
 */
export async function getStaticPaths() {
  const postIds = getPostIds();
  const pathObjects = postIds.map((postId) => {
    return {
      params: {
        id: `${postId}`,
      },
    };
  });
  return {
    paths: pathObjects,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: getPostData(params.id),
    },
  };
}

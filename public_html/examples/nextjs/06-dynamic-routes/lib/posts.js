import { getAllFileNamesInDir, readFileContent } from "./fileHandling";

const POST_DATA_DIR = "data/posts";
const POST_DATA_SEPARATOR = "|";

/**
 * Get the IDs of all posts.
 *
 * @returns {number[]}
 */
export function getPostIds() {
  // Extract the IDs from post filenames
  const filenames = getAllFileNamesInDir(POST_DATA_DIR);
  return extractNumbersFromFileNames(filenames);
}

function extractNumbersFromFileNames(filenames) {
  return filenames.map((filename) => parseInt(filename.split(".")[0]));
}

/**
 * Get data for a specific post.
 *
 * @param id the ID of the post
 * @returns {{id, text: string, title: string}}
 */
export function getPostData(id) {
  const postDataFileName = `${POST_DATA_DIR}/${id}.txt`;
  const fileContent = readFileContent(postDataFileName);
  const postParts = fileContent.split(POST_DATA_SEPARATOR);
  const postTitle = postParts[0];
  const postBody = postParts[1];
  return {
    id: id,
    title: postTitle,
    text: postBody,
  };
}

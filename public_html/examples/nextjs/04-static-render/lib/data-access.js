import fs from "fs";
import path from "path";

const postFileName = path.join(process.cwd(), "data/post.txt");

/**
 * Let's pretend that this function reads data from a database.
 * In this example, it reads data from a file - a static post, which is a text.
 * @returns {string}
 */
export function readPostData() {
  return fs.readFileSync(postFileName, "utf8");
}

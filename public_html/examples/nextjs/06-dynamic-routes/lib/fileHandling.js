import fs from "fs";

/**
 * Get names of all the files in the given directory.
 *
 * @param dir The directory to scan
 * @returns {string[]} The list of all file names within that directory
 */
export function getAllFileNamesInDir(dir) {
  return fs.readdirSync(dir);
}

/**
 * Read content of the file.
 *
 * @param filePath Path to the file
 * @returns {string} The whole content of the file, as a string
 */
export function readFileContent(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

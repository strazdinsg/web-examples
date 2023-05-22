/**
 * A function for sending an HTTP request with fetch. Will be used by SWR
 * @param args
 * @returns {Promise<any>} Promise to parse the HTTP response as a JSON object
 */
export const fetcher = (...args) => fetch(args).then((res) => res.json());

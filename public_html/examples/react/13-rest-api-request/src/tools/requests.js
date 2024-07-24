// All code for sending requests to backend is stored in this file
// Note - no JWT token handling here!

import { HttpResponseError } from "./HttpResponseError";

// Import REST API BASE URL from the environment variable, see .env file
// Note: all environment variables must start with VITE_, otherwise React will not handle them!
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Note - this is an abstraction layer for HTTP requests.
// You can implement this function in any way you want - with Axios,
// XmlHttpRequest, ...

/**
 * Send and asynchronous request to the remote API.
 *
 * @param {string} method the HTTP method to use: GET, POST, PUT. Case-insensitive.
 * @param {string} url The relative API url (base URL is added automatically)
 * @param {object} requestBody The data to send in request body. Ignored for HTTP GET.
 * @return @return {Promise<JSON>} The response body, parsed as a JSON
 * @throws {HttpResponseError} Error code and message from the response body
 */
export function asyncApiRequest(method, url, requestBody) {
  const fullUrl = API_BASE_URL + url;
  let body = null;
  let headers = {};
  if (method.toLowerCase() !== "get" && requestBody) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(requestBody);
  }

  return fetch(fullUrl, {
    method: method,
    mode: "cors",
    headers: headers,
    body: body,
  })
    .then(handleErrors)
    .then((response) => response.json());
}
/**
 * Check whether the HTTP response has a 200 OK status. If it does, return the
 * response. If it does not, throw an Error
 * @param response
 * @return {response} The response (if all was OK)
 * @throws Error containing the response code and text from the response body
 */
async function handleErrors(response) {
  if (!response.ok) {
    const responseText = await response.text();
    throw new HttpResponseError(response.status, responseText);
  }
  return response;
}

// All code for sending requests to backend is stored in this file

// The base path where the API is running, loaded from the REACT_BASE_URL environment variable
import {getCookie} from "./cookies";
import {HttpResponseError} from "./HttpResponseError";

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

/**
 * Send and asynchronous request to the remote API.
 *
 * @param {string} method the HTTP method to use: GET, POST, PUT. Case-insensitive.
 * @param {string} url The relative API url (base URL is added automatically)
 * @param {object} requestBody The data to send in request body. Ignored for HTTP GET.
 * @param {boolean} returnPlainText When true, return plain text instead of JSON object
 * @return @return {Promise<JSON>} The response body, parsed as a JSON
 * @throws {HttpResponseError} Error code and message from the response body
 */
export function asyncApiRequest(method, url, requestBody = null, returnPlainText = false) {
  const fullUrl = API_BASE_URL + url;
  let body = null;
  let headers = {};
  if (method.toLowerCase() !== "get" && requestBody) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(requestBody);
  }
  const jwtToken = getCookie("jwt");
  if (jwtToken) {
    headers["Authorization"] = "Bearer " + jwtToken;
  }

  return fetch(fullUrl, {
    method: method,
    mode: "cors",
    headers: headers,
    body: body,
  })
    .then(handleErrors)
    .then((response) => returnPlainText ? response : response.json());
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

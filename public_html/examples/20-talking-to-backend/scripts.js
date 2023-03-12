// The base URL for our API
const API_BASE_URL = "http://localhost:8080";

/**
 * This function requests data from the API (/api/hello) and displays the
 * response in element with id="message".
 */
async function requestData() {
  const response = await fetch(API_BASE_URL + "/api/hello");
  const responseText = await response.text();
  document.getElementById("message").innerText = responseText;
}

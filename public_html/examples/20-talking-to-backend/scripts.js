// Here we include Javascript code

// const API_BASE_URL = "http://localhost:8080"; // Use this for CORS problem demo
const API_BASE_URL = "";

// This function requests data from the API (/api/hello) and displays the
// response in element with id="message"
function requestData() {
    const apiRequest = new XMLHttpRequest();
    // Here we define what function must be called when the API request is loaded
    // The request can have different states and status codes, we must check
    // that we get status == 200 (OK)
    apiRequest.onload = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                document.getElementById("message").innerText = this.responseText;
            } else {
                console.error("Error " + this.status);
            }
        }
    }
    apiRequest.open("GET", API_BASE_URL + "/api/hello");
    apiRequest.send();
}

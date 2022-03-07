// Here we include Javascript code

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
    apiRequest.open("GET", "/api/hello");
    apiRequest.send();
}

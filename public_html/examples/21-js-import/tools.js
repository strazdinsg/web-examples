/* This is another Javascript file with some useful features. We will import some these features in other JS files */

/**
 * This is a dummy function which we also export, but no other modules are importing it
 * @param name
 */
export function greet(name) {
  console.log("Hello, " + name);
}

/**
 * Create a new HTML element, display time in it. Append it to a specified parent element.
 * @param parentElement The parent element where the time will be shown
 */
export function appendTime(parentElement) {
  const timeElem = document.createElement("p");
  timeElem.innerText = "Time now is " + new Date().toLocaleTimeString();
  parentElement.appendChild(timeElem);
}

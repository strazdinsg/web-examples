function hello() {
  console.log("Hello!");
}

function hei() {
  console.log("Hei");
}

function myOperation(a, b, filter) {
  let result = a * b;
  return filter(result);
}

// console.log(myOperation(3, 5, greaterThan));
function greaterThan(x) {
  return x > 10;
}

// let myFunc = hello;
// myFunc();
//
// myFunc = hei;
// myFunc();

function handleClick(operation) {
  console.log("Button  clicked, operation: " + operation);
}

function setEventHandlers() {
  const button = document.getElementById("remove-btn");
  button.addEventListener("click", handleClick);
}

setInterval(hello, 3000);
setTimeout(hei, 5000);

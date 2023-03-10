/////////////////////////////////////////////
// Step 2
/////////////////////////////////////////////
function showHello() {
  let hello_p = document.getElementById("hello-paragraph");
  hello_p.innerText = "Hello";
}

/////////////////////////////////////////////
// Step 3
/////////////////////////////////////////////
// We can store a reference to the element in a global variable as well
let second_span = document.getElementById("second-counter");
let seconds = 1;

function showSecondCounter() {
  second_span.innerText = "" + seconds; // The "" + ... makes sure we set string as a value, not integer
  seconds++;
}

// Call `showSecondCounter` once every second (every 1000ms)
setInterval(showSecondCounter, 1000);

/////////////////////////////////////////////
// Step 4
/////////////////////////////////////////////
let a_input = document.getElementById("a-input");
let b_input = document.getElementById("b-input");

function updateMultiplication() {
  let a = a_input.value;
  let b = b_input.value;
  document.getElementById("multiplication-output").innerText = "" + a * b;
}

// Update the multiplication right at the start
updateMultiplication();

// And react on changes in the text
a_input.addEventListener("keyup", updateMultiplication);
b_input.addEventListener("keyup", updateMultiplication);

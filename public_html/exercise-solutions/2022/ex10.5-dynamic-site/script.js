/////////////////////////////////////////////
// Step 1
/////////////////////////////////////////////
function showHello() {
  let hello_p = document.getElementById("hello-paragraph");
  hello_p.innerText = "Hello";
}

/////////////////////////////////////////////
// Step 2
/////////////////////////////////////////////
// We can get a reference to the element globally
let second_span = document.getElementById("second-counter");
let seconds = 1;

function showSecondCounter() {
  second_span.innerText = "" + seconds; // The "" + ... makes sure we set string as a value, not integer
  seconds++;
}

// Call it once every second
setInterval(showSecondCounter, 1000);

/////////////////////////////////////////////
// Step 3
/////////////////////////////////////////////
let a_input = document.getElementById("a-input");
let b_input = document.getElementById("b-input");

function updateMultiplication() {
  let a = a_input.value;
  let b = b_input.value;
  document.getElementById("x-output").innerText = "" + a * b;
}

// Update the multiplication right from the start
updateMultiplication();

// And react on changes in the text
a_input.addEventListener("keyup", updateMultiplication);
b_input.addEventListener("keyup", updateMultiplication);

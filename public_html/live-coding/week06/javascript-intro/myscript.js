let cssHeading = document.getElementById("css-exercise-heading");
cssHeading.addEventListener("click", handleButtonClick);

cssHeading.classList.add("yellow-bg");

let article = document.getElementById("css-exercises");

function handleButtonClick() {
  console.log("Clicked!");
}

let intervalFunc = setInterval(periodicHandler, 3000);

console.log("Counter is " + counter);

var counter = 0;

function periodicHandler() {
  console.log(`Woke up again ${++counter}`);
  if (counter === 3) {
    clearInterval(intervalFunc);
    cssHeading.remove();
    let newParagraph = document.createElement("p");
    newParagraph.innerText = "This is a new paragraph!";
    article.appendChild(newParagraph);
  }
}

function bigLoop() {
  console.log(d);
}

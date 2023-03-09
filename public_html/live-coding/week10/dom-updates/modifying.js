function modifyDom() {
  addClassToParagraph();
  addStyleToParagraph();
  addListItems();
  modifyCheckboxes();
}

function addClassToParagraph() {
  const classyP = document.getElementById("classy-paragraph");
  classyP.classList.add("yellow");
}

function addStyleToParagraph() {
  const thirdParagraph = document.querySelector("p:nth-child(4)");
  thirdParagraph.style.textDecoration = "underline";
}
function addListItems() {
  const list = document.querySelector("ul");
  console.log(list);
  list.innerHTML = "<li>First item</li><li>Second item</li>";
}

function modifyCheckboxes() {
  const checkbox = document.getElementById("js-controlled-checkbox");
  checkbox.checked = true;
}

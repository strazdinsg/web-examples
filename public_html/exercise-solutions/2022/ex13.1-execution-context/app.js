// Solution for exercise 12
printG();

var g = 3;
var x = 12;

printG();

function printG() {
  console.log("The value of g is " + g);
}

function a() {
  console.log("inside a: x = " + x);
  var y = 15;
  console.log("y = " + y);
}

function b() {
  console.log("inside b: x = " + x);
  var z = 677;
  console.log("inside b: z = " + z);

  function c() {
    console.log("inside c: z = " + z);
  }

  c();
}

console.log("globally: x = " + x);

a();
b();

console.log("window.x = " + window.x);

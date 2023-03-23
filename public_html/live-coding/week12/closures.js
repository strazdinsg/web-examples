function hello(name) {
  console.log("Hello, " + name);
}

function createGreeter(greetingWord) {
  return function (name) {
    console.log(greetingWord + ", " + name);
  };
}

const hei = createGreeter("Hei");
const sveiki = createGreeter("Sveiks");

function Person() {
  this.name = "John Doe";

  this.print = function () {
    console.log("Name: " + this.name);
    innerFunction();

    function innerFunction() {
      console.log("Now we are in the inner function, this = ");
      console.log(this);
    }
  };
}

const p1 = new Person();
p1.print();

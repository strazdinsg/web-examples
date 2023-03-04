// Solution for exercise 16

// 1
var person = { firstname: "Chuck", lastname: "McDuck" };

// 2
person.printName = function () {
  console.log(this.firstname + " " + this.lastname);
};

// 3
var student = { firstname: "Ole", lastname: "Nordmann" };

// 4
person.printName.apply(student);

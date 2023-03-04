// 1
const person = { firstname: "Chuck", lastname: "McDuck" };

// 2
person.printName = function () {
  console.log(this.firstname + " " + this.lastname);
};

// 3
const student = { firstname: "Ole", lastname: "Nordmann" };

// 4
person.printName.apply(student);

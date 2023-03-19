const Person = { firstname: "John", lastname: "Doe" };

const Student = Object.create(Person);

const Teacher = Object.create(Person);

//Student.firstname = "Unknown student";

Student.getName = function () {
  return this.firstname + " " + this.lastname;
};

const girts = Object.create(Teacher);
girts.firstname = "Girts";
girts.lastname = "Strazdins";

Person.hello = function () {
  console.log("Hello, " + this.firstname);
};

Student.student_number = "studXXXX";

Object.setPrototypeOf(girts, Student);

function hello(name) {
  console.log(`Hello, ${name}`);
}

function hei(name) {
  console.log(`Hei, ${name}`);
}

function createGreeter(greetWord) {
  return function (name) {
    console.log(`${greetWord}, ${name}`);
  };
}

const sveiks = createGreeter("Sveiks");

sveiks("Chuck");

const Person = { firstname: "John", lastname: "Doe" };

const Student = Object.create(Person);

const Teacher = Object.create(Person);

Student.firstname = "Student";

Student.getName = function () {
  return this.firstname + " " + this.lastname;
};

delete Student.firstname;

const girts = Object.create(Teacher);
girts.firstname = "Girts";
girts.lastname = "Strazdins";

Person.greet = function () {
  console.log("Hello, " + this.getName());
};

const stud12 = Object.create(Student);

Student.student_number = 12345;

Object.setPrototypeOf(girts, Student);

function printFirstName() {
  console.log("The first name is " + this.firstname);
}

printFirstName.call(girts);

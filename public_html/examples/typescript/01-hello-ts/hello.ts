// Define a type for a person
type Person = {
  name: string;
  id: number;
};

// Define a function that greets a person
function greet(person: Person) {
  console.log(`Hello, ${person.name}`);
}

const john: Person = { name: "John", id: 1 };
greet(john);

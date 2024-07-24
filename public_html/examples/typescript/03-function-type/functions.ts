// Example from https://www.typescriptlang.org/docs/handbook/2/functions.html
function greeting(printer: (message: string) => void) {
  printer("Hello, world!");
}

function printToConsole(message: string) {
  console.log(message);
}

greeting(printToConsole);

// Another example from https://www.typescriptlang.org/docs/handbook/2/functions.html
type DescribableFunction = {
  description: string; // Additional property
  (someArg: number): boolean; // Function signature
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}

myFunc.description = "Mai fankšen";

doSomething(myFunc);

// In this example we process a nullable string. We need to check if it is null
// before we can use it.

// Define a function that takes a string and returns its length
function getLength(str: string) {
  // Without this check the tsc compiler will throw an error if strictNullChecks is enabled
  // set the strictNullChecks option in tsconfig.json
  // if (str === null) {
  //   return 0;
  // }
  return str.length;
}

// Call the function with a null value
console.log(getLength(null));

// Call the function with a non-null value
console.log(getLength("Hello, world"));

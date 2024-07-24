// We want to be able to call myForEach with or without the index argument.
// We don't need to make it optional, because the index is always passed to the
// callback inside myForEach.
// It does not hurt to skip it in the callback definition, because passing an extra argument
// to a function is not an error in JavasScript.
function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
  for (let i = 0; i < arr.length; ++i) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (arg, index) => {
  console.log(arg, index);
});

myForEach([4, 5, 6], (arg) => {
  console.log(arg);
});

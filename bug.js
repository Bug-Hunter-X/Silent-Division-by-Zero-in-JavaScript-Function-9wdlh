function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line is problematic
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns 0, but should throw an error
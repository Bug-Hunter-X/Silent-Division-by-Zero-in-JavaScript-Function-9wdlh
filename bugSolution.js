function myFunction(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Throws an error
console.log(myFunction(10,2)); // Returns 5
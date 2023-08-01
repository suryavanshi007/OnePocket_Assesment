function sumArrayIntegers(arr) {
  // Initialize a variable to hold the sum
  let sum = 0;

  // Loop through the array and add each integer to the sum
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is an integer
    if (Number.isInteger(arr[i])) {
      sum += arr[i];
    }
  }

  return sum;
}

// Test the function with an example array
const exampleArray = [1, 2, 3, 4, 5];
console.log("Sum:", sumArrayIntegers(exampleArray)); // Output: Sum: 15

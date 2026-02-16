    
function sumOfPositives(arr) {
  return arr.filter(num => num > 0).reduce((acc, current) => acc + current, 0);
}

// Example usage:
console.log(sumOfPositives([1, -4, 7, 12])); // Output: 20

  

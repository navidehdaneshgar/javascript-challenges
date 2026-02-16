    
function periodIsLate(last, today, cycleLength) {
  const oneDay = 1000 * 60 * 60 * 24;
  const difference = (today - last) / oneDay;
  return difference > cycleLength;
}

// Example usage:
console.log(periodIsLate(new Date(2024, 0, 1), new Date(2024, 0, 31), 28)); // true

  

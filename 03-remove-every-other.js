function removeEveryOther(arr) {
  return arr.filter((element, index) => index % 2 === 0);
}

// Example usage:
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove"]));

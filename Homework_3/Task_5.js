function getCountOfMissingElements(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  return max - min + 1 - array.length;
}

console.log(getCountOfMissingElements([1, 2, 9]));
console.log(getCountOfMissingElements([-10, 2, 5, -2, 9]));

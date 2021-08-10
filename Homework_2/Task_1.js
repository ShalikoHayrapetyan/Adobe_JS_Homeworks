function filterArray(array, num) {
  const newArr = array.filter((el) => el > num);
  return newArr.length ? newArr : "Such value does not exist.";
}

console.log(filterArray([10, 25, 16, -5, 30, 15, 24], 16));
console.log(filterArray([1, 1, 2, -3, 0, 8, 4, 0], 9));

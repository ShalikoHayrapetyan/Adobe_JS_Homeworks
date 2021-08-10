function findMinPositivElement(arr, result = -1) {
  if (!arr.length) return result;
  if (arr[0] >= 0) {
    result === -1
      ? (result = arr[0])
      : arr[0] < result
      ? (result = arr[0])
      : null;
  }
  arr.shift();
  return findMinPositivElement(arr, result);
}

console.log(findMinPositivElement([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(findMinPositivElement([45, -9, 15, 5, -78]));
console.log(findMinPositivElement([-5, -9, -111, -1000, -7]));

function concateArrays(arr, result = []) {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.concat(concateArrays(element, result));
    } else {
      result.push(element);
    }
  });
  return result;
}

console.log(concateArrays([1, [3, 4, [1, 2]], 10]));
console.log(concateArrays([14, [1, [[[3, []]]], 1], 0]));

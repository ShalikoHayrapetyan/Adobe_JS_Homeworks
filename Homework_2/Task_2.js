function findNumbers(a, b) {
  if (a > b) return "Such numbers does not exist.";
  let result = "";
  let x = a + 1;
  while (x !== b) {
    let condition = true;
    const array = String(x).split("");
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element % 2 === 1) {
        condition = false;
        break;
      }
    }

    if (condition) result += x + ", ";
    x++;
  }
  if (result.length) {
    return result.slice(0, -2);
  }
  return "Such numbers does not exist.";
}

console.log(findNumbers(19, 42));
console.log(findNumbers(99, 199));

function isAllDigitsAreOdd(number) {
  let strNumber = String(number);

  if (!strNumber.length) return true;
  if (+strNumber[0] % 2 === 0) return false;

  return isAllDigitsAreOdd(strNumber.slice(1));
}

console.log(isAllDigitsAreOdd(4211133));
console.log(isAllDigitsAreOdd(7791));
console.log(isAllDigitsAreOdd(5));

function sumOfDigits(number) {
  const stringOfNumber = number.toString();
  if (stringOfNumber.length < 2) return number;
  let sum = 0;

  stringOfNumber.split("").forEach((el) => (sum += Number(el)));

  if (sum.toString().length > 1) return sumOfDigits(sum);
  return sum;
}

console.log(sumOfDigits(15));
console.log(sumOfDigits(29));
console.log(sumOfDigits(999999999999));

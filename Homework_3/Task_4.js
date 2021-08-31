function getSubstrings(string, size, result = []) {
  if (string.length <= size) return [...result, string];

  result.push(string.slice(0, size));
  return getSubstrings(string.slice(1), size, result);
}

console.log(getSubstrings("495215", 3));
console.log(getSubstrings("abcdfghz", 7));

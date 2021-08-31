function invertObject(object) {
  const result = {};
  for (const key in object) {
    const element = object[key];
    if (result.hasOwnProperty(element)) {
      if (Array.isArray(result[element])) {
        result[element] = [...result[element], key];
      } else result[element] = [result[element], key];
    } else result[element] = key;
  }

  return result;
}

console.log(invertObject({ a: "1", b: "2" }));
console.log(invertObject({ a: "1", b: "2", c: "2" }));
console.log(invertObject({ a: "1", b: "2", c: "2", d: "2" }));
console.log(invertObject({ a: "1", b: "2", c: "4", d: "2", e: "3" }));

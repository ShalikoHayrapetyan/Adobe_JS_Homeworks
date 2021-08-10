function buildsTree(array, parent = null) {
  let tree = {};
  let newParents = array.filter((el) => el["parents"] === parent);
  if (newParents.length === 0) return tree;

  newParents.forEach((el) => (tree[el["id"]] = buildsTree(array, el["id"])));
  return tree;
}

let array = [
  { parents: null, id: 0 },
  { parents: 0, id: 1 },
  { parents: 0, id: 2 },
  { parents: 1, id: 3 },
  { parents: 1, id: 4 },
  { parents: 2, id: 5 },
  { parents: 4, id: 6 },
];

console.log(buildsTree(array));

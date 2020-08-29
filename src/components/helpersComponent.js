function buildTree(array, parent = { id: -1 }, tree = []) {
  const children = array.filter((entity) => entity.parentKey === parent.id);
  if (children.length) {
    tree.push(children);
    parent.children = children;
    children.map((child) => buildTree(array, child, tree));
  }
  return tree[0];
}

function removeTree(array, parent, tree = []) {
  const children = array.filter((entity) => String(entity.parentKey) === String(parent.id));
  if (children.length) {
    tree.push(...children);
    parent.children = children;
    children.map((child) => removeTree(array, child, tree));
  }
  return tree;
}

function getLastId(value) {
  return Math.max.apply(Math, value.map(val => val.id));
}

export { buildTree, getLastId, removeTree };

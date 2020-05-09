var binaryTreePaths = function(root, str = '', arr = []) {
  if (root === null) {
    return [];
  }

  // 处理root节点
  if (str) {
    str = str + '->' + root.val;
  } else {
    // str为空时，表示当前迭代的节点为整棵树的根节点
    str = root.val + '';
  }

  // 迭代左子树，将操作过的str传入，以便下一个迭代也能操作str
  let left = binaryTreePaths(root.left, str, arr);
  // 同上
  let right = binaryTreePaths(root.right, str, arr);

  // 当左右节点为空时，路径已走完，str也创建完整了
  if (left.length === 0 && right.length === 0) {
    arr.push(str);
  }

  return arr;
};


let test = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};
console.log(binaryTreePaths(test))
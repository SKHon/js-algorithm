/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function(root, str = '', arr = []) {
  if (root === null) {
    return []
  } 
  if (str) {
    str = str + '->' + root.val
  }
  else {
    str = root.val + ''
  }

  let left = binaryTreePaths(root.left, str, arr)
  let right = binaryTreePaths(root.right, str, arr)

  if (left.length === 0 && right.length === 0) {
    arr.push(str)
  }
  return arr
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



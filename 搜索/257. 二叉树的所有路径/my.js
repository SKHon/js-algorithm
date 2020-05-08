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
let queue = [];
let s = '';
var binaryTreePaths = function(root) {
  if (root !== null && (root.left !== null || root.right !== null)) {
    s += `${root.val}->`;
  } else {
    s += `${root.val}`;
  }
  if (root.right === null && root.left === null) {
    queue.push(s);
    s = '';
  }
  if (root.left) {
    binaryTreePaths(root.left);
    s += `${root.val}->`;
  }

  if (root.right) {
    binaryTreePaths(root.right);
    // s += `${root.val}->`;
  }
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
binaryTreePaths(test);
console.log(s);
console.log(queue);

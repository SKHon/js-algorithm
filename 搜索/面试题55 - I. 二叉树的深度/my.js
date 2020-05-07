/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

let test = {
  val: 1,
  left: {
    val: 22,
    left: { val: 33, left: null, right: null },
    right: { val: 7, left: null, right: null }
  },
  right: {
    val: 2,
    left: { val: 44, left: null, right: null },
    right: { val: 5, left: null, right: null }
  }
};

function print(node) {
  console.log(node.val);
}

console.log(maxDepth(test));

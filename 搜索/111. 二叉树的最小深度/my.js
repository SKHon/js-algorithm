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
var minDepth = function(root) {
  if (root === null) return 0;
  let depth = 1;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;
    while (len > 0) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left === null && current.right === null) {
        return depth;
      }
      len--;
    }
    depth++;
  }
  return depth;
};

console.log(
  minDepth({
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null }
    },
    right: { val: 3, left: null, right: null }
  })
);

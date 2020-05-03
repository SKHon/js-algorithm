/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let queue = [root, root];
  while (queue.length > 0) {
      let l = queue.shift();
      let r = queue.shift();
      if (l === null && r === null) continue;
      if (l === null || r === null) return false;
      if (l.val !== r.val) return false;
      queue.push(l.left);
      queue.push(r.right);
      queue.push(l.right);
      queue.push(r.left);
  }
  return true

};
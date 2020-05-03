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
  if (!root) return true;
  let queue = [];

  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len / 2; i++) {
      if (!queue[i] && queue[len - i - 1]) return false;
      if (!queue[len - i - 1] && queue[i]) return false;
      if (
        queue[i] &&
        queue[len - i - 1] &&
        queue[i].val !== queue[len - i - 1].val
      ) {
        return false;
      }
    }

    while (len > 0) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      } else {
        queue.push(null);
      }
      if (current.right) {
        queue.push(current.right);
      } else {
        queue.push(null);
      }
      len--;
    }

    // for (let j of queue) {
    //   if (j !== null) {
    //     continue;
    //   }
    // }
    // break;
  }
  return true;
};

let test = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: { val: 3, left: null, right: null }
  },
  right: {
    val: 2,
    left: null,
    right: { val: 3, left: null, right: null }
  }
};

console.log(isSymmetric(test));

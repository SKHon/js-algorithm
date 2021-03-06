/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = []; // 用来放node节点
  let list = []; // 用来放节点值
  if (root === null) return [];
  queue.push(root);
  while (queue.length > 0) {
    let layer = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      // console.log(i);
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
        layer.push(current.left.val);
      }
      if (current.right) {
        queue.push(current.right);
        layer.push(current.right.val);
      }
    }
    if (layer.length) list.push(layer);
  }
  list.unshift([root.val]);
  console.log(list);
  return list;
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
    left: null,
    right: null
  }
};

levelOrder(test);

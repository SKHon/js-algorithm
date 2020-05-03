/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let depth = 0;
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    while (len > 0) {
      let current = queue.shift();
      for (let c of current.children) {
        queue.push(c);
      }
      len--;
    }
    depth++;
  }
  return depth;
};

let test = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] }
      ]
    },
    { val: 2, children: [] },
    { val: 4, children: [] }
  ]
};
console.log(maxDepth(test));

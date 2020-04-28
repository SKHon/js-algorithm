// 广度优先通过队列处理 【深度优先用栈】
// 将一层记录在数组中 并记录数组长度
// 找下一行所有数据
// 将数组首位弹出 将首位的左右节点追在数组后
// 按照记录的数组长度 将上层的结点全部弹出后 此时数组只剩下下一行结点了 此时就完成了一层的遍历
// var arr = []; //用来记录行节点 每行都存与arr数组中
// arr.push(root);
// while (arr.length > 0) {
//   //你的操作
//   //本题是记录末位

//   var len = arr.length;
//   while (len > 0) {
//     var now = arr.shift();
//     if (now.left != null) arr.push(now.left);
//     if (now.right != null) arr.push(now.right);
//     len--;
//   }
// }

var levelOrder = function(root) {
  if (root == null) return [];
  var arr = [root];
  var res = [];
  while (arr.length > 0) {
    var n = arr.length;
    var now = [];
    while (n-- > 0) {
      var node = arr.shift();
      now.push(node.val);
      if (node.left != null) arr.push(node.left);
      if (node.right != null) arr.push(node.right);
    }
    res.push(now);
  }
  return res;
};

let test = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null }
};
levelOrder(test);

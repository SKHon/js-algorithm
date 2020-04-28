// 二叉搜索树
function BinaryTree() {
  var Node = function(key) {
    this.key = key;
    this.left = this.right = null;
  };

  this.root = null;

  this.insertNode = function(root, newNode) {
    if (root === null) {
      root = newNode;
    } else {
      if (root.key > newNode.key) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          insertNode(root.left, newNode);
        }
      } else {
        if (root.right === null) {
          root.right = newNode;
        } else {
          insertNode(root.right, newNode);
        }
      }
    }
  };

  this.insert = function(key) {
    //创建节点
    var node = new Node(key);
    // 不是根节点则新增节点
    insertNode(root, node);
  };

  // 前序遍历二叉树
  var traverseNodesDLR = function(node, callback) {
    if (node !== null) {
      console.log(node.key);
      //callback(node.key);
      traverseNodesDLR(node.left, callback);
      traverseNodesDLR(node.right, callback);
    }
  };
  //前序遍历算法
  this.DLR = function(callback) {
    traverseNodesDLR(root, callback);
  };
}

//构建排序二叉树
var nodes = [6, 2, 3, 4, 9, 8, 7, 12, 1, 22];
var binaryTree = new BinaryTree();
nodes.forEach(function(key) {
  binaryTree.insert(key);
});

//处理节点方法
var callback = function(key) {
  console.log(key);
};
//中序遍历
// console.log('中序遍历结果:')
// binaryTree.LDR(callback)

//前序遍历
console.log('前序遍历结果：');
binaryTree.DLR(callback);

//后序遍历
// console.log('后序遍历结果：');
// binaryTree.LRD(callback);

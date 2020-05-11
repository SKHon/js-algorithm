// error

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var valSum = 0
var hasPathSum = function(root, sum, str = '') {
   if (root === null) {
     return ''
   }

   if (str) {
    str+=`->${root.val}`
   } else {
    str+=root.val
   }

   console.log(str) 
   let left = hasPathSum(root.left, sum, str)
   let right = hasPathSum(root.right, sum, str)
   
   
  //  if (!left && !right && ValSum === sum) {
   
  //    return str
  //  }

   return str

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
console.log(hasPathSum(test, 7))
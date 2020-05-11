var str = ''
var hasPathSum = function(root, sum) {
  if(!root) return false
  return dfs(root, sum)
};
function dfs(root, sum) {
  if(root.val === sum && !root.left && !root.right) return true
  let leftRes = false
  let rightRes = false
  if(root.left) {
      leftRes = dfs(root.left, sum - root.val)
  }
  if(root.right) {
      rightRes = dfs(root.right, sum - root.val)
  }
  return (leftRes || rightRes)
}


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
console.log(str)
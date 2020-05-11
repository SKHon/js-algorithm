var hasPathSum = function(root, sum) {
  
  if (root === null) return false;
  if (root.left === null && root.right === null && root.val === sum)
    return true;
   
  let left = hasPathSum(root.left, sum - root.val);
  let right = hasPathSum(root.right, sum - root.val);
  return left || right;
};

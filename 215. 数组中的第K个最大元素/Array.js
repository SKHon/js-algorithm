/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // 用js的Array方法，先排序，然后直接取第k-1位
  let newNums = nums.sort((a, b) => {
    return b - a;
  });
  console.log(newNums);
  return newNums[k - 1];
};

console.log(findKthLargest([2, 1, 3, 10, 5, 6, 20, 99, 33], 2));

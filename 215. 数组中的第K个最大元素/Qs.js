/**
将数组倒序，用数组第一个数为基准，左边的都比arr[0] 大，右边的都比 arr[0] 小
如果 left.length + 1 == k, 说明 基准是第k大的数
如果 left.length >= k， 说明第k大的数在 left 中
否则，在right中
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 倒序排序
 */
var findKthLargest = function(arr, k) {
  var cur = arr[0];
  var left = [];
  var right = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > cur) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  if (left.length + 1 == k) {
    return cur;
  } else if (left.length >= k) {
    return findKthLargest(left, k);
  } else {
    return findKthLargest(right, k - left.length - 1);
  }
};

console.log(findKthLargest([2, 1, 3, 10, 5, 6, 20, 99, 33], 2));

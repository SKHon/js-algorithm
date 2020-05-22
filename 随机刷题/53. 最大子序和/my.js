/**
 * @param {number[]} nums
 * @return {number}
 */

 // 滑动窗口
var maxSubArray = function(nums) {
  
  let left = 0, right = 0;
  let sum = 0 // 用来存储计算和
  let current // 用来存储当前叫啥和
  let result = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      sum+=nums[j]
      if (current > sum) {
        result = Math.max(current,result) 
        break
      } else {
        current = sum
      }
      
    }
  }
  return result

};

var test = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(test))
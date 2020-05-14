// 我这个超时了

/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心，每次选择跳个最大的

var jump = function(nums) {

  var min_jump = 0
  var step = 0
  for (let i =0; i < nums.length;i+=step) {
    
    for (let j = i+1; j<=nums[i];j++) {
      
      step = Math.max(step, nums[j])
    }
    min_jump++
  }
  return min_jump
};

var test = [1,1,1,1,1];
console.log(jump(test))
console.log(O_n)

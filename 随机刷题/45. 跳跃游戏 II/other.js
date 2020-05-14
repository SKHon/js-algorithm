var jump = function(nums) {
  var end = 0;
  var maxPosition = 0; 
  var steps = 0;
  for(var i = 0; i < nums.length - 1; i++){
      //找能跳的最远的
      maxPosition = Math.max(maxPosition, nums[i] + i); 
      if( i == end){ //遇到边界，就更新边界，并且步数加一
          end = maxPosition;
          steps++;
      }
  }
  return steps;
}

var test = [2,3,1,1,4];
console.log(jump(test))
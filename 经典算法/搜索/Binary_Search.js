// 二分搜索要求的数组必须是有序的
binarySearch = function(item){
  this.quickSort(); 
  var low = 0, 
  high = array.length - 1, 
  while (low <= high) { 
    mid = Math.floor((low + high) / 2); 
    element = array[mid];
    if (element < item) {
        low = mid + 1;
    } else if (element > item) {
      high = mid - 1; 
    } 
    else {
      return mid;
    } 
  }
  return -1; 
};



   
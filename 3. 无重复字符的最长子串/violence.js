// 这个时间复杂度O(n^3)，最后超时了

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        let subString = ''
        subString = s.slice(i,j+1)
        if (isNoRepeat(subString)) {
          max = max > subString.length ? max : subString.length
        } 
      }
    }
    return max
};

var isNoRepeat = function(str) {
  let arr = str.split('')
  let newArr = new Set(arr)
  return arr.length === newArr.size ? true : false
}

console.log(lengthOfLongestSubstring("abcabcbb"))

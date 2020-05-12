/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var arr = str.split(' ');
  if (pattern.length != arr.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) != arr.indexOf(arr[i])) {
      return false;
    }
  }
  return true;
};

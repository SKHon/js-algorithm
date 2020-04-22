/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 先转数据，string没有排序方法
  let sArr = s.split('');
  let tArr = t.split('');
  sArr.sort();
  tArr.sort();
  // 需要转一下字符串，因为引用类型 === 比较的是堆内存地址
  if (sArr.toString() === tArr.toString()) {
    return true;
  }
  return false;
};

console.log(isAnagram('anagram', 'nagaram'));

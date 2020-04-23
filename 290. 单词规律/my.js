/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let pArr = [];
  let sArr = [];
  pArr = pattern.split('');
  sArr = str.split(' ');
  if (pArr.length !== sArr.length) {
    return false;
  }
  let hashMap = new Map();
  let tempArr = []; //用来判重
  for (let i = 0; i < pArr.length; i++) {
    if (hashMap.has(pArr[i])) {
      if (sArr[i] === hashMap.get(pArr[i])) {
        continue;
      } else {
        return false;
      }
    } else if (!hashMap.get(pArr[i]) && tempArr.indexOf(sArr[i]) !== -1) {
      return false;
    } else {
      hashMap.set(pArr[i], sArr[i]);
      tempArr.push(sArr[i]);
    }
  }
  return true;
};

console.log(wordPattern('abba', 'dog dog dog dog'));

// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 1) {
//     continue;
//   }
//   console.log(arr[i]);
// }

// for (let i in arr) {
//   if (arr[i] === 1) {
//     continue;
//   }
//   console.log(arr[i]);
// }

// for (let item of arr) {
//   if (item === 1) {
//     continue;
//   }
//   console.log(item);
// }

// arr.forEach(item => {
//   if (item === 1) {
//     continue;
//   }
//   console.log(item);
// });

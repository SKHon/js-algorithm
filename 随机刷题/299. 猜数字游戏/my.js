/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let aSum = 0; // 公牛
  let bSum = 0; // 奶牛
  let secretArr = secret.split('');
  let guessArr = guess.split('');
  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] === secretArr[i]) {
      aSum++;
      secretArr[i] = 'X';
      guessArr[i] = 'Y';
    }
  }
  console.log(secretArr);
  console.log(guessArr);
  for (let j = 0; j < guessArr.length; j++) {
    if (secretArr.indexOf(guessArr[j]) !== -1) {
      bSum++;
      secretArr[secretArr.indexOf(guess[j])] = 'Z';
    }
  }
  return `${aSum}A${bSum}B`;
};
console.log(getHint('11', '10'));

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

var getHint = function(secret, guess) {
  let bull = 0,
    cow = 0,
    map = new Map(),
    restGuess = '';

  for (let i = 0, len = secret.length; i < len; i++) {
    let s = secret.charAt(i),
      g = guess.charAt(i);
    if (s === g) {
      bull++;
    } else {
      if (!map.has(s)) {
        map.set(s, 1);
      } else {
        map.set(s, map.get(s) + 1);
      }
      restGuess += g;
    }
  }

  for (let i = 0, len = restGuess.length; i < len; i++) {
    let g = restGuess.charAt(i);
    if (map.has(g) && map.get(g) > 0) {
      map.set(g, map.get(g) - 1);
      cow++;
    }
  }

  return bull + 'A' + cow + 'B';
};

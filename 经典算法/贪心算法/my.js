// 最少找零钱问题，比如我要找36美元，而美国的面额只有1，5，10，25四种面额，怎么找钱数最少

function MinCoinChange(sum) {
  let changes = [1, 5, 10];
  let totle = 0;
  let map = new Map();
  for (let i = changes.length - 1; i >= 0; i--) {
    map.set(changes[i], 0);
    while (totle <= sum) {
      totle += changes[i];
      if (totle > sum) {
        totle -= changes[i];
        break;
      }
      map.set(changes[i], map.get(changes[i]) + 1);
    }
  }
  console.log(map);
}
MinCoinChange(44);

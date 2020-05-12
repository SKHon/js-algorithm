// 这也能用递归。。我服了，根本想不起来用递归
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
var test1 = {
  val: 1,
  next: { val: 4, next: { val: 8, next: null } }
};

var test2 = {
  val: 2,
  next: { val: 5, next: { val: 11, next: null } }
};

console.log(JSON.stringify(mergeTwoLists(test1, test2)));

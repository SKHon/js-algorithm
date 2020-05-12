//error
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 1 -> 4 -> 8
// 2 -> 5 -> 11
var mergeTwoLists = function(l1, l2) {
  var c1 = l1;
  var c2 = l2;
  var result = null;
  while (c1 !== null && c2 !== null) {
    console.log(c1);
    console.log(c2);
    var temp;
    if (c1.val < c2.val) {
      temp = c1.next;
      c1.next = c2;
      c1 = temp;
    } else {
      temp = c2.next;
      c2.next = c1;
      c2 = temp;
    }
  }
  console.log(c1);
  console.log(c2);
};

var test1 = {
  val: 1,
  next: { val: 4, next: { val: 8, next: null } }
};

var test2 = {
  val: 2,
  next: { val: 5, next: { val: 11, next: null } }
};

mergeTwoLists(test1, test2);

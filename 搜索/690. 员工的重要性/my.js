/**
 * 总结：
 * 1. 如果可以通过唯一性的索引，一定要考虑Map
 * 2. 这个题中，把节点存放在数组中，看似利用数组解，其实一旦里面的元素随意放的时候，数组就不好解决了。
 *  */

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  if (employees === null || !employees.length) {
    return 0;
  }

  let queue = []; // 该队列来存每个节点
  let importanceSum = 0;
  let map = new Map();
  for (let e of employees) {
    map.set(e.id, e);
  }
  queue.push(map.get(id)); // 先把root节点入队列

  while (queue.length > 0) {
    let shiftEmplyees = queue.shift();
    importanceSum += shiftEmplyees.importance;
    if (shiftEmplyees.subordinates.length) {
      shiftEmplyees.subordinates.forEach(element => {
        queue.push(map.get(element));
      });
    }
  }
  return importanceSum;
};

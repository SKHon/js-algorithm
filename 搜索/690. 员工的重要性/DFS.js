/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     // It's the unique id of each node
 *     // unique id of this employee
 *     this.id = id;
 *     // the importance value of this employee
 *     this.importance = importance;
 *     // the id of direct subordinates
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  var e = new Employee();
  for (e of employees) {
    if (e.id == id) {
      if (e.subordinates.length == 0) {
        // 没有子节点
        return e.importance;
      }
      for (var subId of e.subordinates) {
        e.importance += GetImportance(employees, subId);
      }
      return e.importance;
    }
  }
  return 0;
};

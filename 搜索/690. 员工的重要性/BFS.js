var GetImportance = function(employees, id) {
  if (employees == null || employees.length == 0) return 0;
  var map = new Map();
  var e = new Employee();
  //将所有id存放到map中
  for (e of employees) {
    map.set(e.id, e);
  }
  var queue = [];
  //查找到第一个id，并存入队列中
  queue.push(map.get(id));
  var ans = 0;
  //这里面的循环条件必须是queue.length,而不能是 queue;
  while (queue.length) {
    var m = queue.shift();
    ans += m.importance;
    for (var n of m.subordinates) {
      //将父节点的孩子全部存放到队列中
      queue.push(map.get(n));
    }
  }
  return ans;
};

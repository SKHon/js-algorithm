function BFS (node , cb) {
  // 1. 先声明一个队列，用来放节点
  let queue = []

  // 2. 先让初始节点入队列
  queue.push(node)

  // 3. 对queue进行while循环
  while ( queue.length > 0) {

    // 4. 队头节点出队列
    let current = queue.shift()

    // 5. 可对出队节点进行操作
    cb(current)

    // 6. 把关联对节点入队列
    queue.push(current.neighbors)

  }
}


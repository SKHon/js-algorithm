// 可用数组实现

function Stack() {
  this.array = []
}

Stack.prototype.pop = function() {
  return this.array.pop()
}

Stack.prototype.push = function(element) {
  this.array.push(element)
}

let stack = new Stack()
// stack.push(1) 
// stack.push(2) 
// stack.push(3)
// console.log(stack.array) 
// console.log(stack.pop())
// console.log(stack.array) 
// console.log(stack.pop())


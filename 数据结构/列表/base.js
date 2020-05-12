function Link() {
  var Node = function(val) {
    this.val = val;
    this.next = null;
  };

  // 头指针
  var head = null;
  var length = 0;
  this.append = function(val) {
    let newNode = new Node(val);
    let current;
    if (head === null) {
      head = newNode;
    } else {
      current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    length++;
  };

  this.print = function() {
    let current = head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  };
}

let link = new Link();
link.append(1);
link.append(2);
link.append(3);
link.print();

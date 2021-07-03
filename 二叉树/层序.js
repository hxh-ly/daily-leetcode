//1 队列  先左后右 
function deepGet(head) {
  if (head == null) return null;
  let Queue = []
  Queue.push(head)
  while (Queue.length != 0) {
    Queue.shift()
    if (head.left) {
      Queue.push(head.left)
    }
    if (head.right) {
      Queue.push(head.right)
    }
  }
}

//shift pop
//shift 添加
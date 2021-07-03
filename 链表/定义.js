


//1.单向链表
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.size = 0
    this.head = null
  }
  append(element) {
    let node = new Node(element)
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.getNode(this.size - 1);
      current.next = node;
    }
    this.size++;
  }
  getNode(index) {
    if (index < 0 || index >= this.size)
      throw new Error('OUT range')
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current
  }
  appendAt(position, element) {
    //边界
    if (position < 0 || position > this.size) {
      throw ('Out appendAt Range')
    }
    let node = new Node(element)
    //0
    if (position === 0) {
      node.next = this.head;
      this.head = node
    }
    //其他
    else {
      let pre = this.getNode(position - 1)
      node.next = pre.next;
      pre.next = node;
    }
    this.size++;
  }
  remove(position) {
    if (position < 0 || position > this.size) {
      throw Error('out remove Range')
    }
    let current = this.head
    if (position === 0) {
      this.head = current.next
    } else {
      let pre = this.getNode(position - 1)
      current = pre.next;
      pre.next = current.next;
    }
    this.size--;
  }
  indexOf(element) {
    if (position < 0 || position > this.size) {
      throw Error('out indexOf Range')
    }
  }
}
//2.双向链表



//3.单向循环链表



//4.双向循环链表


//5.环形链表

let test1 = new LinkedList()
test1.append(1)  // 0
test1.append(2)   //1
//test1.append(3)  
test1.appendAt(2, 3)  //2
test1.remove(2)
console.dir(test1, {
  depth: 100
});

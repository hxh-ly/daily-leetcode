function Node(element, left, right, parent) {
  this.element = element;
  this.left = left
  this.right = right
  this.parent = parent
  this.show = function () {
    return this.element;
  }
}
function BST() {
  this.root = null

  //插入节点  规则左小右大构建
  this.insert = function (element) {
    let node = new Node(element, null, null);
    if (this.root === null) this.root = node;
    else {
      let buffer = this.root;
      while (true) {
        if (node.element > buffer.element) {
          if (buffer.right === null) {
            buffer.right = node;
            node.parents = buffer;
            break;
          } else {
            buffer = buffer.right;
          }
        }
        if (node.element <= buffer.element) {
          if (buffer.left === null) {
            buffer.left = node;
            node.parents = buffer;
            break;
          } else {
            buffer = buffer.left;
          }
        }
      }
    }
  }

  //前
  this.preOrder = function (node) {
    if (node === null) return;
    else {
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }

  }
  //中
  this.inOrder = function (node) {
    if (node === null) return;
    this.preOrder(node.left);
    console.log(node.show());
    this.preOrder(node.right);
  }
  //后
  this.postOrder = function (node) {
    if (node === null) return;
    else {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }

  },
    this.inOrder111 = function (head) {
      if (head === null) return;

      if (head != null) {
        let Stack = []
        while (head != null || Stack.length != 0) {
          //右已经置为head 
          if (head != null) {
            Stack.push(head)
            head = head.left
          }
          else {
            //这个出
            head = Stack.pop()
            console.log(head.element);
            //如果有right  继续重复左边界全入
            //如果没有  Stack里的继续出
            head = head.right;
          }
        }
      }
    }


}

let bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(3);
bst.insert(99);
bst.insert(22);
//bst.preOrder(bst.root);//23 16 3 22 99 45
bst.inOrder111(bst.root)// 3 16 22 23 45 99
console.log("----");


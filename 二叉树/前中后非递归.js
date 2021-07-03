//前 
/* 
【规则】 堆栈
      1.出栈
      2.打印
      3.右左
      4.循环 
      */
function preOrder(node) {
  if (node === null) return;
  //堆栈
  let Stack = []
  Stack.push(node);
  while (Stack.length != 0) {
    node = Stack.pop();
    console.log(node.val);
    if (node.right) {
      Stack.push(node.right)
    }
    if (node.left) {
      Stack.push(node.left)
    }
  }
}


//中序
/**
 * 【规则】 1.左边界全入
 *          2.出
 *          3.右入
 *          4.循环
 */
function inOrder(head) {
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
        head=Stack.pop()
        console.log(head.element);
        //如果有right  继续重复左边界全入
        //如果没有  Stack里的继续出
        head = head.right;
      }
    }
  }
}
//后序
function postOrder(node) {
  if (node === null) return;
  let Stack = []
  let store = []
  Stack.push(node);
  while (Stack.length != 0) {
    node = Stack.pop();
    store.push(node);
    if (node.left) {
      Stack.push(node.left)
    } if (node.right) {
      Stack.push(node.right)
    }
  }
  for (let i = store.length - 1; i > 0; i--) {
    console.log(store[i]);
  }
}
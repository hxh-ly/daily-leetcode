/*
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

说明： 链表带有一个random指针

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof


*/
var copyRandomList = function (head) {
  if (!head) { return head }
  let cur = head
  //1. 复制重复链表
  /* 
    1 2 3 null
    1 1 2 2 3 3 null
  
  */
  while (cur) {
    let CopyNode = new Node(cur.val)
    CopyNode.next = cur.next.next;
    cur.next = CopyNode
    cur = cur.next.next;
  }
  cur = head;
  //2. 补全随机指针
  while (cur) {
    if (cur.random) {
      cur.next.random = cur.random.next;
    }
    cur = cur.next.next
  }
  let CopyHead = head.next, curCopy = head.next;
  cur = head;
  //3.分开 | 还原
  while (cur != null) {
    cur.next = cur.next.next
    cur = cur.next
    if (curCopy.next) {
      curCopy.next = curCopy.next.next
      curCopy = curCopy.next
    }
  }
  return CopyHead
}
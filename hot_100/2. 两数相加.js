/* 
    两数相加之链表
链表 l1: 2 ---->  4 ------ >3 
链表 l2: 3 ---->  6 -------> 7 -------> 1
 342+1763= 2105
 输出链表 
 5----->0---->1----->2
*/
var addTwoNumbers = function (l1, l2) {
  let head = null, tail = null, carry = 0
  while (l1 || l2) {
    var v1 = l1.val || 0;
    var v2 = l2.val || 0;
    //这一轮+上一轮进位的值
    val = v1 + v2 + carry
    if (!head) {
      //第一次
      head = tail = new ListNode(val % 10)
    } else {
      //持续拼接
      tail.next = new ListNode(val % 10)
      tail = tail.next;
    }
    //进位多少
    carry = ~~(val / 10)
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

  }
  //最后一次
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }
  return head;
};
//反转链表
var reverse_list = function (head) {
  let p0 = null, p1 = head, p2 = head
  while (p1) {
    p2 = p1.next;
    p1.next = p0;
    p0 = p1;
    p1 = p2
  }
  return p0;
}
/* 
【题目】 输入一个链表，输出该链表中倒数第k个节点
1 2 3 4 5 k=2 
4 5
*/
var getKthFromEnd = function (head, k) {
  //1.统计后在做


  //2.双指针
  /* 
    p2 先走k步 后一起走
    p2走出去后，p1也刚好离终点k步 【倒数k】
    
  */
  if (head == null) return null
  let p1 = head, p2 = head
  let count = 0
  while (p2 && count < k) {
    p2 = p2.next
    count++;
  }
  while (p2 != null) {
    p1 = p1.next
    p2 = p2.next
  }
  return p1;

};
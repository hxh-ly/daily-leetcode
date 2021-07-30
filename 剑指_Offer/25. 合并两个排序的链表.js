/* 
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
*/
/* 
【思路】
1.引入伪头节点
2.双指针
*/
var merTwoLists = function (l1, l2) {
  //伪首
  let p = new ListNode(0)
  let cur = p;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
  }
  cur.next = l1 == null ? l2 : l1
  //p的下一个才是应该返回的头
  return p.next;
}
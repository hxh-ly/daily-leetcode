var deleteNode = function (head) {
  if (head == null) return null;
  if (head.val == val) return head.next;
  let p1 = head, p2 = null
  while (p1 && p1.val != val) {
    p2 = p1;
    p1 = p1.next;
  }
  if (p1) {
    p2.next = p1.next
  }
  return head;
}






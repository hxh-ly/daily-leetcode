var reverseBetween = function (head, left, right) {
  let pre = null, cur = head, next = null;
  //跳到待定位置 pre cur 
  for (let i = 1; i < left; i++) {
      pre = cur;
      cur = cur.next
  }
  //站住位置
  let pre2 = pre;
  let cur2 = cur;

//反转
  for (i = left; i <= right; i++) {
      [cur.next,pre,cur]=[pre,cur,cur.next]
    /*   next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next; */
  }

  if (pre2 != null) {
      pre2.next = pre;

  } else {
      head = pre;
  }
  cur2.next = cur;


  return head;
};
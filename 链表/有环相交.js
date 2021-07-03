/* 【题目】给定2个可能有环可能无环的单链表 head1 head2
若相交 返回 相交头个节点
不相交  null 
  有环  有环  相交（听诊器 小电视)   不相交(6 6)
  有环  无环  相交(听诊器)   不相交 
  无环  无环  相交（同起点开始走）   不相交

*/



var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) {
    return null
  }
  //快慢获取 相交节点
  let loop1 = getLoopNode(headA);
  let loop2 = getLoopNode(headB);
  if (loop1 == null && lopp2 == null) {
    //无环 先走A-B步在一起走
    return noLoop(headA, headB)
  }
  if (loop1 != null && loop2 != null) {
    return bothLoop(headA, headB, loop1, loop2);
  }

};
//判断是否有环 找出入环节点
var getLoopNode = function (head) {
  if (head == null) return null;
  let s = head, f = head.next;
  while (f.next != null && f.next.next != null) {
    s = s.next;
    f = f.next.next;
    if (s === f) {
      return s;
    }
  }
  return null;
}

//无环相交
var noLoop = function (headA, headB) {
  //有无相交都这样
  let s = headA, f = headB
  while (s !== f) {
    if (s == null) {
      s = headB
    } else {
      s = s.next
    }
    if (f == null) {
      f = headA
    } else {
      f = f.next
    }
  }
  return s
}
//
var bothLoop = function (headA, headB, loop1, loop2) {
  let cur1 = null
  let cur2 = null
  if (loop1 == loop2) {
    //终点是loop1
    cur1 = headA
    cur2 = headB
    let n = 0
    while (cur1.next != loop1) {
      n++;
      cur1 = cur1.next
    }
    while (cur2.next != loop1) { n--; cur2 = cur2.next }
    if (cur1 !== cur2) {
      return null
    }
    cur1 = n > 0 ? headA : headB
    cur2 = cur1 == headA ? headB : headA
    n = Math.abs(n)
    while (n != 0) {
      n--;
      cur1 = cur1.next;
    }
    while (cur1 != cur2) {
      cur1 = cur1.next;
      cur2 = cur2.next;
    }
    return cur1;
  } else {
      cur1=loop1.next;
      while(cur1!=loop1){
        if(cur1!=loop2){
          cur1=cur1.next;
        }else{
          return cur1;
        }
      }

  }
  return null;
}
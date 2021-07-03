var getIntersectionNode = function (headA, headB) {
  let s = headA, f = headB;
  // 走完A 走B  
  // 走完B 走A
  // 有交点也是这样  没有也是这样
  while (s !== f) {
      if (s === null) {
          s = headB;
      } else {
          s = s.next;
      }
      if (f === null) {
          f = headA;
      } else {
          f = f.next;
      }
  }
  return s


  //方法2
  /*  思路： 1.head1-->end1   head2-->end2  en1===?end2
      2.return  null || 3
      3.同起点开始走(return p1) */
      let s = headA, f = headB;
      let n = 0;
      while (s.next != null) {
        n++
        s = s.next;
    
      }
      while (f.next != null) {
        n--;
        f = f.next;
    
      }
      if (s != f) {
        return null;
      }
      // >0 A长； <=0 B长
      //s 是长的
      s = n > 0 ? headA : headB
      f = s == headA ? headB : headA
    
      n = Math.abs(n)
      while (n != 0) {
        n--;
        s = s.next;
      }
      while (s != f) {
        s = s.next;
        f = f.next;
      }
      return f;
};
var hasCycle = function (head) {
  if (head == null) return false;
  let s = head, f = head;

  while (f.next != null && f.next.next != null) {
      s = s.next;
      f = f.next.next;
      //地址？等于
      if (s === f) {
          return true;
      }
  }
  return false;
};


//方法2
//  end1===end2？ null || _____
//  
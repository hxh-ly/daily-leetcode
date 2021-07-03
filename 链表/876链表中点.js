var middleNode = function (head) {
  let s=head,f=head;
  //对应 双数 和单数
  while(f!=null&&f.next!=null){
      s=s.next;
      f=f.next.next;
  }
  return s;
  };
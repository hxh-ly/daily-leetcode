var reverseList = function(head) {
  let pre=null,cur=head,next=head;
  while(cur!=null){
      next=cur.next;
      cur.next=pre;
      pre=cur;
      cur=next;
  }
  return pre;
  };
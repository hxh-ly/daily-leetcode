var deleteDuplicates = function(head) {
  if(head===null) return null;
let s=head,f=head.next
while(f!=null){
  if(s.val==f.val){
      f=f.next;
      s.next=f;
      //后一次可能还是一样
      continue;

  }
  s=s.next;
  f=f.next;

}
return head;
}; 
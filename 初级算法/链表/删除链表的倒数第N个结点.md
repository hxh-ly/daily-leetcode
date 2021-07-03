思路：

1.获取长度

2.找到resultIndex -----》 length-n

3.前一个 目标 下一个

4.前一个接上后一个  目标置空

5.放回head

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var length=getLength(head);
    console.log(length)
    var resultIndex =length-n;
    var pre =null,resultNode=null,nextNode=null;
    var current=head,count=0;
    if(resultIndex==0)
        head=head.next;
    else{
        while(current){
                if(count==resultIndex-1){
                    pre=current;
                }
                if(count==resultIndex){
                    resultNode=current;
                }
                if(count==resultIndex+1){
                    nextNode=current
                }
                current=current.next;
                count++;
        }
        pre.next=nextNode;
        resultNode=null;

    }
    return head;
};

function getLength(head){
    var count=0;
    while(head!=null){
        head=head.next;
        count++;
    }
    return count;
}
```


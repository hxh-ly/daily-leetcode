/* 
题目：双向链表每一层有某一个结点有一个child指向下一层
使其扁平化
1 --> 2---> 3---->null
      ↓
      4---> 5 ----> 6---->null
            ↓
            7 -----> 8 ---> 9 --->null

输出【1，2，4，5，7，8，9，6，3】

【思路】：
遇到child 就双链表重新拼接
数组list保持child以后的剩余部分

*/
var flatten = function (head) {
  var res = head;//最后返回
  var q = head;//用于操作
  var list = [] //存放因为child而断开的剩余部分
  while (q) {
    if (q.child) {
      var child = q.child
      child.prev = q;
      //注意 q.next 是否存在
      if (q.next) {
        //剩余部分
        var last = q.next;
        last.prev = null;
        list.push(last)
      }
      q.next = child
      q.child = null
    }
    //后面拼接数组里的剩余部分
    pre = q
    q = q.next
  }
  //接上断开的
  for (let i = list.length - 1; i >= 0; i--) {
    pre.next = list[i]
    list[i].prev = pre
    while (pre.next) {
      pre = pre.next
    }
  }
  return res;
}
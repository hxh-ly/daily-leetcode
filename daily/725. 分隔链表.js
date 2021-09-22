/* 
head k
1 尽可能的平均
2 前面的比后面多
【1，2，3】  5  ---->  【1，2，3，null,null】
[1,2,3,4,5,6,7,8,9,10]  3 ----> [[1,2,3,4],[5,6,7],[8,9,10]]
*/
var splitListToParts = function (head, k) {
  // 1 长度
  // 
  var length = 0, temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }
  var avLength = ~~(length / k)
  var remain = length % k
  var res = new Array(k).fill(null)
  var root = head;
  //因为有初始化null不够就停了
  for (let i = 0; i < k && root != null; i++) {
    res[i] = root;
    var size = (remain--) > 0 ? avLength + 1 : avLength
    //最后root站在自己队里的最后一个位置
    for (let j = 0; j < size - 1; j++) {
      root = root.next;
    }
    //待会还回来
    const next = root.next;
    root.next = null;
    //下一个数组的头
    root = next
  }
  return res
}
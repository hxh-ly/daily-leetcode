/*
【题目】 
     3
   / \
  9  20
    /  \
   15   7
【
【3】，
【20，9】，
【15，7】
】
*/
/* 
【思路】

*/
var levelOrder = function (root) {
  if (!root) return []
  //加一个层数判断
  let queue = [root], res = [], temp = null
  let count = 0
  while (queue.length) {
    let list = []
    count++;
    for (let i = queue.length; i > 0; i--) {
      temp = queue.shift()
      list.push(temp.val)
      if (temp.left) { queue.push(temp.left) }
      if (temp.right) { queue.push(temp.right) }
    }
    //偶数行要反转   根是1
    if ((count & 1) == 0) { list.reverse() }
    res.push(list)
  }
  return res
}
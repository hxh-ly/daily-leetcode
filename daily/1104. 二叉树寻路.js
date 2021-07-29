/* 
Z字形二叉树
     1
   3   2
4   5 6   7  

偶数行 反转   1<<(n-1) + (1<<n) -1 - label
最后逆序
*/
var pathInZigZagTree = function (label) {
  let path = []
  let row = Math.floor(Math.log2(label)) + 1
  //让他适应通用规则
  if (row % 2 == 0) {
    label = getReverse(label, row)
  }
  while (row > 0) {
    if (row % 2 === 0) {
      path.push(getReverse(label, row))
    }
    else {
      path.push(label)
    }
    //上 一层
    row--;
    label = label >> 1;

  }
  path.reverse()
  return path;
}

var getReverse = function (label, row) {

  return (1 << row - 1) + (1 << row) - 1 - label;
}
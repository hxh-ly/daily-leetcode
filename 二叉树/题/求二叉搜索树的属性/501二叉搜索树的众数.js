var findMode = function (root) {
  //根的值
  let base = 0;
  //统计数量
  let count = 0;
  //存最大量
  let MaxCount = 0;
  //相同多个
  let arr = []
  const update = (x) => {
    if (x == base) {
      count++;
    } else {
      count = 1;
      base = x;
    }
    if (count == MaxCount) {
      arr.push(base)
    }
    //第一次把 第一个值放进去
    if (count > MaxCount) {
      MaxCount = count;
      arr = [base]
    }
  }
  var inorder = function (root) {
    if (root == null) return;
    inorder(root.left)
    update(root.val);
    inorder(root.right)

  }
  inorder(root)
  return arr


}

//1.递归
var maxLength = function (root) {
  if (root === null) return 0;
  return 1 + Math.max(maxLength(root.left), maxDepth(root.right))
}
//2.非递归

var maxDepth = function (root) {
  if (root === null) return 0;
  let queue = [root]
  let levelIndex = 0
  while (queue.length != 0) {
    // 这一层 个数
    let levelSize = queue.length;
    //这一层
    levelIndex++;
    // 走完这一层  父出子进  子也将成为父
    for (let i = 1; i <= levelSize; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
}

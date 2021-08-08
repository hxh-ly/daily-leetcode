/*
    5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
target=22
【
【5，4，11，2】
【5，8，4，5】
】

【思路】
递归到根节点,
不符合就不断的回溯
回溯的过程是让list元素pop
*/
var pathSum = function (root, target) {
  let res = []
  dfs(root, target, [])
  return res
}

var dfs = function (root, cur, list) {
  if (!root) return;
  cur += root.val
  list.push(root.val)
  if (!root.left && !root.right && cur == target) {
    res.push([...list])
  } else {
    dfs(root.left, cur, list)
    dfs(root.right, cur, list)
  }
  list.pop()
}
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root]
  let res = []
  while (queue.length) {
      let head = queue.shift()
      res.push(head.val)
      if (head.left) {
          queue.push(head.left)
      } if (head.right) {
          queue.push(head.right)
      }
  }
  return res

};

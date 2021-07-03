var levelOrder = function (root) {
  const ret = []
  if (!root) {
    return ret;
  }
  const queue = []
  queue.push(root)

  while (queue.length !== 0) {
    //子
    //统计这层数量
    const curLevSize = queue.length;
    //开辟一层
    ret.push([])
    //父
    for (let i = 1; i <= curLevSize; ++i) {
      const node = queue.shift()
      ret[ret.length - 1].push(node.val)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right)
    }

  }
  return ret;
};